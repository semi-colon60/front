import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
	return (
		<Box height={500}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
			>
			<Typography
				variant='h4'
				>
				Page Not Found
			</Typography>
			<CircularProgress />
		</Box>
	)
}

export default PageNotFound
