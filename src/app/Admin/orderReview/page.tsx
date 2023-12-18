"use client"
import React, { useEffect } from 'react'
import { GridRowsProp } from '@mui/x-data-grid'
import ReviewOrderDataGrid from '@/app/components/DataGrid/ReviewOrderDataGrid';
import fetchForReviewOrder from '@/app/fetch/fetchForReviewOrder';
import OrderDTO from '@/app/modules/OrderDTO';
import { Box } from '@mui/material';

const page = () => {
	const [orders, setOrders] = React.useState<GridRowsProp>([]);
	const isDataFetched = React.useRef(false);

	const getOrders = async () => {
		fetchForReviewOrder()
			.then(data => {
				data.forEach((element: OrderDTO) => {
					setOrders(orders => [...orders, {
						id: element._order.orderId,
						orderNo: element._order.orderId,
						orderDate: element._order.orderDate,
						dealer: element._commercialId.name + ' ' + element._commercialId.surname,
						status: element._order.approval
					}]);
				});
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		if (!isDataFetched.current)
		{
			getOrders();
			isDataFetched.current = true;
		}

		return () => {
			setOrders(prev => []);
		}
	}, []);
	
	return (
		<Box>
			<ReviewOrderDataGrid rows={orders} />
		</Box>
	)
}

export default page;
