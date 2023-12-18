import { Button } from '@mui/material'
import React from 'react'

interface AddToCartProps {
	materialValues: any,
	onHandleAddToCart: () => void
}

const AddToCart = (props: AddToCartProps) => {
	return (
		<Button
			className='add-to-cart-button'
			variant='contained'
			onClick={props.onHandleAddToCart}
		>
			SEPETE EKLE
		</Button>
	)
}

export default AddToCart;
