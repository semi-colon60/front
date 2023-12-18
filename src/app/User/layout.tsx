"use client"
import React, { PropsWithChildren } from 'react'
import UserNavbar from './UserNavbar'
import { Box, Container, ThemeProvider } from '@mui/material'
import customTheme from '../components/Theme/customTheme';
import '@/app/User/global.css'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={customTheme}>
			<Container className='user-layout-container'>
				<UserNavbar />
				<Box mt={10}>
					{children}
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default Layout
