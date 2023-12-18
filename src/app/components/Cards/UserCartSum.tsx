import { Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import '@/app/components/Cards/cards.css'
import CartConfirm from '../Buttons/UserCartButtons/CartConfirm'
interface moneys{
	total: number
}
const UserCartSum = (props: moneys) => {
	return (
		<Grid container className='user-cart-summary-confirm-card'>
			<Grid item xs={12} display='flex' justifyContent="flex-start" alignItems="flex-start">
				<Typography className='cart-summary' variant="h5" component="div">
					Sepet Özeti
				</Typography>
			</Grid>
			<Grid item xs={12} >
				<Tooltip title="Buraya konteynır görünümü eklenecek" followCursor>
					<Box className='containerOfKonteynir' sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2, borderRadius: 3}}>
						Konteynır
					</Box>
				</Tooltip>
			</Grid>
            <Grid item xs={12} display='flex' justifyContent="center" alignItems="center">
				
                <Box className='adress-box' sx={{ color: 'background.paper', p: 0, borderRadius: 3}}>
                    Adres
                    <Button className = "adresDegistirButton" variant="outlined">
                        Adresi değiştir
                    </Button>
                </Box>
			</Grid>
			<Grid item xs={12} display='flex' justifyContent="center" alignItems="flex-end">
				<CartConfirm total = {props.total}/>
			</Grid>
		</Grid>
	)
}

export default UserCartSum;
