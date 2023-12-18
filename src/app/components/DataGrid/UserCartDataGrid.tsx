import { Box, Button, Grid } from "@mui/material"
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from "@mui/x-data-grid"
import '@/app/components/DataGrid/datagrid.css'
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
	{ field: '_MainGroupName', headerName: 'Ana Grup', width: 130 },
	{ field: '_SubGroupName', headerName: 'Alt Grup', width: 130 },
	{ field: '_MaterialCode', headerName: 'Kod', width: 130 },
	{ field: '_Description', headerName: 'Tanım', width: 130 },
	{ field: '_Unit', headerName: 'Birim', width: 130 },
	{ field: '_Quantity', headerName: 'Miktar', width: 130 },
	{ field: 'button', headerName: '',  width: 130, renderCell: (GridValueGetterParams) =>{

		return (
			<Button><DeleteIcon></DeleteIcon></Button>
		);
	}

	},

  ];

interface CartItemsProps {
	rows: GridRowsProp
}
const UserCartDataGrid = (props: CartItemsProps) => {
    return (
        <Box className="user-cart-order-box">
            <DataGrid
                className='user-orders-list-table'
                rows={props.rows}
                columns={columns}
                initialState=
                {{
                    pagination: 
                    {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                rowSpacingType="margin"
                pageSizeOptions={[8, 25, 50]}
                slots={{ toolbar: GridToolbar }}
            >
            </DataGrid>
    </Box>
    )
  }
  
  export default UserCartDataGrid
  