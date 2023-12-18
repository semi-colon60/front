"use client";
import { AppBar, Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import MyAccount from './MyAccount';
import StyledTabs from './CustomTabs/StyledTabs';
import "./globals.css";

interface BarProps {
	children?: React.ReactNode;
	accountButtonOnClickHandler?: () => void;
	value: number;
	handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const ApplicationBar = (props: BarProps) => {
	return (
		<AppBar className='appbar'>
			<Container className='topbarinside'>
				<Box className='test'>
				<Grid
					display={'flex'}
					container
					alignItems={'flex-end'}
					className='navbargrid'
					>
					<Grid item xs={6.5}>
						<StyledTabs
							value={props.value}
							onChange={props.handleChange}
						>
							{props.children}
						</StyledTabs>
					</Grid>
					<Grid item xs={2}>
					</Grid>
					<Grid item xs={3.5}>
					<Box
						className="navbarrhs"
						>
						<MyAccount onClickHandler={props.accountButtonOnClickHandler} />
						<Button className='logoBox' /*href={"/Admin/orderReview"}*/>
						<Box
							component="img"
							alt="GBAY Logo"
							src="/icons/gBay-logos_transparent.png"
							className="logoButton"
						/>
						</Button>
					</Box>
					</Grid>
				</Grid>
				</Box>
			</Container>
		</AppBar>
	)
}

export default ApplicationBar
