import { Box, Divider, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import GoToCart from '../Buttons/UserMaterialListButtons/GoToCart'
import '@/app/components/Cards/cards.css'
import SummaryCardDetails from './SummaryCardDetails'

interface UserCartSummaryProps {
}

const UserCartSummary = (props: UserCartSummaryProps) => {
	return (
		<Grid container className='user-cart-summary-card'>
			<Grid item xs={12} display='flex' justifyContent="flex-start" alignItems="flex-start">
				<Typography className='cart-summary' variant="h5" component="div">
					Sepet Özeti
				</Typography>
			</Grid>
			<Grid item xs={12} display='flex' justifyContent="center" alignItems="center">
				<Tooltip title="Buraya konteynır görünümü eklenecek" followCursor>
					<Box className='container-warning-box' sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2, borderRadius: 3}}>
						Konteynır
					</Box>
				</Tooltip>
			</Grid>
			<Grid item xs={12} display='flex' flexDirection={'column'} justifyContent="flex-end" alignItems="center">
				<SummaryCardDetails />
				<GoToCart />
			</Grid>
		</Grid>
	)
}

export default UserCartSummary;
