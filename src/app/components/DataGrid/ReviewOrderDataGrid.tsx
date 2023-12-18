import { Box } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import './datagrid.css'

const columns: GridColDef[] = [
	{ field: 'orderNo', headerName: 'Sipariş No', flex: 0.25 },
	{ field: 'orderDate', headerName: 'Sipariş Tarihi', flex: 0.25 },
	{ field: 'dealer', headerName: 'Sipariş Veren', flex: 0.25 },
	{ field: 'status', headerName: 'Onay Durumu', flex: 0.25 },
];

interface ReviewOrderProps {
	rows: GridRowsProp
}

const ReviewOrderDataGrid = (props: ReviewOrderProps) => {
	return (
		<Box className='revieworderbox'>
			<DataGrid
				className='reviewordertable'
				rows={props.rows}
				columns={columns}
				initialState=
				{{
					pagination: { paginationModel: { pageSize: 9 } }
				}}
				pageSizeOptions={[9, 25, 50]}
				checkboxSelection
				rowSpacingType='margin'
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	)
}

export default ReviewOrderDataGrid
