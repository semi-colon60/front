import { Box, Button } from '@mui/material'
import { AccountBox } from '@mui/icons-material'
import React from 'react'
import "./globals.css"

interface AccountButtonProps
{
	onClickHandler?: () => void;
}

const MyAccount = (props: AccountButtonProps) => {
  return (
	<Box
		className="myAccountBox"
	>
		<Button
			onClick={props.onClickHandler}
			variant='contained'
			startIcon={<AccountBox />}
			className='myAccountButton'
			>
			ONUR SEYİTOĞLU
		</Button>
	</Box>
  )
}

export default MyAccount
