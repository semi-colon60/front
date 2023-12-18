import { Box, TextField } from '@mui/material'
import { DataGrid, GridColDef, GridEditInputCell, GridEditInputCellProps, GridRowsProp, GridToolbar, useGridApiRef } from '@mui/x-data-grid'
import React from 'react'
import '@/app/components/DataGrid/datagrid.css'
import AddToCart from '../Buttons/UserMaterialListButtons/AddToCart';
import { useMaterialPageContext } from '@/app/contexts/MaterialPageProvider';
import CartItemDTO from '@/app/modules/CartItemDTO';
import fetchAndSendCartItemToCart from '@/app/fetch/fetchForUserMaterials/fetchAndSendCartItemToCart';


interface UserMaterialListProps {
	rows: GridRowsProp
}

const UserMaterialListDataGrid = (props: UserMaterialListProps) => {

	const apiRef = useGridApiRef();
	const minValue = 1;
	const maxValue = 999999;

	const columns: GridColDef[] = [
		{ field: 'productNo', headerName: 'Ürün Kodu', flex: 0.25 },
		{ field: 'productName', headerName: 'Ürün İsmi', flex: 0.25 },
		{ field: 'price', headerName: 'Fiyat (TL)', flex: 0.25 },
		{ field: 'mass', headerName: 'Ağırlık (kg)', flex: 0.25 },
		{ field: 'volume', headerName: 'Hacim (m^3)', flex: 0.25 },
		{ field: 'unit', headerName: 'Birim', flex: 0.25 },
		{
			field: 'amount',
			headerName: 'Miktar',
			type: 'number',
			flex: 0.25,
			renderCell: (params: GridEditInputCellProps) => {
				// This is just for demonstration. It has not any functionality.
				return <TextField
					type="number"
					value={params.value}
					variant='standard'
				/>
			},
			disableColumnMenu: true,
			sortable: false,
			editable: true,
			renderEditCell(params) {

				const onHandleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
					let targetValue: number = Number(event.target.value);
					let targetValueString: string = String(event.target.value);
					let lengthAfterDot: number = targetValueString.length - targetValueString.indexOf('.') - 1;

					// if there is more than 4 digits after dot, round it to 4 digits
					if (lengthAfterDot > 4) {
						targetValue = Number(targetValue.toFixed(4));
					}

					// boundaries
					if (targetValue < minValue) {
						targetValue = minValue;
					}
					else if (targetValue > maxValue) {
						targetValue = maxValue;
					}

					// update cell value
					apiRef.current?.setEditCellValue({id: params.id, field: params.field, value: targetValue}, event);
				}

				return <GridEditInputCell
							{...params}
							inputProps={{ min: minValue, max: maxValue, style: { textAlign: 'center' } }}
							onChange={onHandleAmountChange}
						/>;
			},
		},
		{
			field: 'addToCartButton',
			type: 'button',
			flex: 0.25,
			headerName: '',
			renderCell: (materialValues: GridEditInputCellProps) =>
			{
				const { commercialId, fetchTotals, setIsSuccessAlertOpen } = useMaterialPageContext();

				const handleAddToCart = async () => {
					const cellMode = apiRef.current?.getCellMode(materialValues.id, 'amount');

					if (cellMode === 'edit')
						apiRef.current?.stopCellEditMode({id: materialValues.id, field: 'amount'});

					const currentRow = apiRef.current?.getRow(materialValues.id);

					if (currentRow === undefined || currentRow.amount == 0)
						return;

					const cartItemToSend: CartItemDTO = {
						materialId: currentRow.id,
						commercialId: commercialId,
						quantity: currentRow.amount
					}

					try {
						await fetchAndSendCartItemToCart(cartItemToSend);
						fetchTotals();
						setIsSuccessAlertOpen(true);
					} catch (error) {
						console.log("An error occured when tring to add a material to the cart: ", error);
					}
				}

				return <AddToCart
					onHandleAddToCart={handleAddToCart}
					materialValues={materialValues}
				/>;
			},
			disableColumnMenu: true,
			sortable: false
		}
	];

	return (
		<Box className="user-material-list-box">
			<DataGrid
				className='user-material-list-table'
				rows={props.rows}
				columns={columns}
				initialState=
				{{
					pagination: { paginationModel: { pageSize: 8 } }
				}}
				pageSizeOptions={[8, 25, 50]}
				rowSpacingType='margin'
				slots={{ toolbar: GridToolbar }}
				apiRef={apiRef}
			/>
		</Box>
	)
}

export default UserMaterialListDataGrid
