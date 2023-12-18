'use client'
import React, { useState } from 'react';
import './globals.css';
import { Button, Checkbox, Container, FormControlLabel, TextField, ThemeProvider } from '@mui/material';
import fetchForLogin from '@/app/fetch/fetchForLogin';
import { useRouter } from 'next/navigation';
import LoginDTO from '../modules/LoginDTO';
import customTheme from '@/app/components/Theme/customTheme';

const Login = () => {
	const [usernameValue, setUsernameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const router = useRouter();
	let commercial_id: number;

	const handleInputChange = (event: any) => {
		const value = event.target.value;
		const pressedElement = event.target as HTMLInputElement;;


		const elementId = pressedElement.id;
		if (elementId === "inputPassword1") {
			setPasswordValue(value);
		}
		else if (elementId === "inputUsername1") {
			setUsernameValue(value);
		}
	};

	const buttonClicked = async () => {
		let isSuccess: boolean = false;
		const validateEmailRegex: RegExp = /^\S+@\S+\.\S+$/;
		const data: LoginDTO = await fetchForLogin(usernameValue,
			passwordValue,
			usernameValue.match(validateEmailRegex) != null)
			.then(response => {
				isSuccess = true;
				return response.data;
			})
			.catch(error => console.log("Message: ", error));
		commercial_id = data._commercialId;
		if (isSuccess) {
			if (data._isadmin) {
				router.push('/Admin/orderReview');
			}
			else {
				router.push('/User/materials');
			}
		}
	}

	return (
		<ThemeProvider theme={customTheme}>
			<div className='mainBox'>
				<Container maxWidth='xl'
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						height: 800,
						marginRight: 20,
					}}
				>
					<div id="logInContainer">
						<img className="Logo" src="/icons/gBay-logos_transparent.png"></img>

						<div id="username">
							<TextField
								value={usernameValue}
								onChange={handleInputChange}
								hiddenLabel className="inputUsername"
								id="inputUsername1"
								label="E-Posta"
								variant="outlined" />
						</div>

						<div >
							<TextField
								value={passwordValue}
								onChange={handleInputChange}
								className="inputPassword"
								id="inputPassword1"
								label="Şifre"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>
						</div>

						<div id="rememberme">
							<FormControlLabel control={<Checkbox defaultChecked />} label="Beni Hatırla" />
						</div>

						<div id="actions">

							<Button onClick={buttonClicked} className="Button" variant="contained" color="primary" >
								Giriş
							</Button>

						</div>

					</div>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default Login