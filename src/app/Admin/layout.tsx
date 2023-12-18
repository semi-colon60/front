"use client"
import React, { PropsWithChildren } from 'react'
import AdminNavbar from './AdminNavbar'
import { Box, Container, ThemeProvider } from '@mui/material'
import customTheme from '../components/Theme/customTheme';
import './global.css'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={customTheme}>
			<Container className='globalcontent' maxWidth="lg">
				<AdminNavbar />
					{children}
			</Container>
		</ThemeProvider>
	)
}

export default Layout
