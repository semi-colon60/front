import { Button, Grid } from '@mui/material'
import React from 'react'
import "@/app/components/Buttons/UserCartButtons/cartButton.css"
interface moneys{
	total: number
}
const GoToCart = (props: moneys) => {
	return (
		<Button className="confirm-cart-button" variant="contained" color="primary">
			<Grid container>
				<Grid item xs display='flex' justifyContent='center' alignItems='center'> {props.total}TL</Grid>
				<Grid item xs display='flex' justifyContent='center' alignItems='center'>Onayla</Grid>
			</Grid>
		</Button>
	)
}

export default GoToCart
