import { Button, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import "@/app/components/Buttons/UserMaterialListButtons/cartbutton.css"
import { ArrowForwardIos } from '@mui/icons-material'
import { useMaterialPageContext } from '@/app/contexts/MaterialPageProvider'
import { useRouter } from 'next/navigation';

interface GoToCartProps {
}

const GoToCart = (props: GoToCartProps) => {
	const router = useRouter();
	const [moneyField, setMoneyField] = React.useState(0.0);
	const { totalPrice } = useMaterialPageContext();

	useEffect(() => {
		let moneyField = parseFloat(totalPrice.toFixed(2));
		setMoneyField(moneyField);
	}, [totalPrice]);

	const checkMoneyFieldIsZero = (): boolean => {
		return (
			moneyField === undefined ||
			moneyField === null ||
			moneyField == 0
		);
	}

	const onMoneyFieldChange = () => {
		if (checkMoneyFieldIsZero()) {
			return <></>
		}
		else {
			return <Typography>
				{moneyField} TL
			</Typography>
		}
	}

	const handleGoToCartButtonClick = () => {
		router.push('/User/Cart');
	}

	return (
		<Button className="go-to-cart-button"
				variant="contained"
				color="primary"
				endIcon={<ArrowForwardIos />}
				disabled={checkMoneyFieldIsZero()}
				onClick={handleGoToCartButtonClick}
			>
			<Grid container>
				<Grid item xs display='flex' justifyContent='center' alignItems='center'>
					{
						onMoneyFieldChange()
					}
				</Grid>
				<Grid item xs display='flex' justifyContent='center' alignItems='center'>
					<Typography>
						Sepete Git
					</Typography>
				</Grid>
			</Grid>
		</Button>
	)
}

export default GoToCart
