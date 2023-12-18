import { useMaterialPageContext } from '@/app/contexts/MaterialPageProvider'
import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SummaryCardDetails = () => {
	const { totalPrice, totalWeight, totalVolume } = useMaterialPageContext();

	return (
		<Box className='summary-card-details'>
			<Divider />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant='body2'>
						Toplam Ağırlık
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='body2' align='right'>
						{parseFloat(totalWeight.toFixed(3))} kg
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='body2'>
						Toplam Hacim
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='body2' align='right'>
						{parseFloat(totalVolume.toFixed(5))} m^3
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='body2'>
						Sipariş Tutarı
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='body2' align='right'>
						{parseFloat(totalPrice.toFixed(2))} TL
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default SummaryCardDetails;