'use client'
import PageNotFound from '@/app/components/NotFound/PageNotFound'
import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { Box, Typography, Container, ThemeProvider } from '@mui/material'
import AddUser from './AddUser';


const page = () => {
	return (
		<Box>
		<AddUser/>
		</Box>
	)
}

export default page
