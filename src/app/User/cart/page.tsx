'use client';
import { Box, Button, Grid } from '@mui/material'
import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar, GridRowsProp } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import '@/app/components/DataGrid/datagrid.css';
import UserCartDataGrid from '@/app/components/DataGrid/UserCartDataGrid';
import UserCartSum from '@/app/components/Cards/UserCartSum';
import fetchForCartItems from '@/app/fetch/fetchForCartItems';
import CartItemInfosDTO from '@/app/modules/CartItemInfoDTOs';


const page = () => {
	const [cartItemsInTable, setCartItemsInTable] = React.useState<GridRowsProp>([]);
	const isDataFetched = React.useRef(false);
	const [money, setMoney] = React.useState(0);
	let totelMoney = 0;

	const fetchOrders = async () => {
		const _cartItems = await fetchForCartItems(12);
		setCartItemsInTable(_cartItems);
		
		for (const material of _cartItems) {
			const store_data: CartItemInfosDTO = material;
			totelMoney = totelMoney + store_data._Result;
			
		}
		setMoney(totelMoney);
	}

	useEffect(() => {
		if (!isDataFetched.current) {
			fetchOrders();
			isDataFetched.current = true;
		}

		return () => {
			setCartItemsInTable(prev => []);
		}
	}, [])

	return (
     <Box>
		<Grid container spacing ={4}>
			<Grid item xs={8.5}>
				<UserCartDataGrid rows = {cartItemsInTable}/>
			</Grid>
			<Grid item xs={3.5} justifyContent='center'>
				<UserCartSum total = {money}/>
			</Grid>
		</Grid>
	 </Box>
	)
}



export default page
