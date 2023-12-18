import { Box, Typography, Container, ThemeProvider, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import './globals.css'
import { useState } from 'react';
import fetchForAddUser from '@/app/fetch/fetchForAddUser';
const AddUser = () => {
	const [cariunvan, setCariUnvan] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [mail, setMail] = useState('');
	const [password, setpassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const handleInputChange = (event: any) => {
		const value = event.target.value;
		const pressedElement = event.target as HTMLInputElement;;


		const elementId = pressedElement.id;
		if (elementId === "cariUnvan1") {
			setCariUnvan(value);
		}
		else if (elementId === "ad_Soyad1") {
			setName(value);
		}
		else if (elementId === "kullaniciadi1") {
			setUsername(value);
		}
		else if (elementId === "telefonNumarasi1") {
			setPhoneNumber(value);
		}
		else if (elementId === "mailAdresi1") {
			setMail(value);
		}
		else if (elementId === "inputPassword1") {
			setpassword(value);
		}
	};

	const buttonClicked = (event: any) => {
		
		setIsAdmin(!isAdmin);
	}

	const saveClicked = async () => {
		const words = name.split(' '); 
		let surname:string; 
		
		surname =  words.length > 0 ? words.pop()! : '';
		
		const firstName = words.join(' ');

		await fetchForAddUser(cariunvan,
			firstName, surname, username, phoneNumber, mail, password, isAdmin)
			.catch(error => console.log("Message: ", error));
	}

	return (
		<Box className="AddUserContainer">

			<div id="KullanıcıEkleContainer">
				<Typography variant='h4'>
					Kullanıcı Ekle
				</Typography>
			</div>

			<div id="Bayi_Bilgileri">
				<Typography variant='h6'>
					Bayi Bilgileri
				</Typography>
			</div>

			<div id="row1">
				<div id="cariUnvanContainer">
					<TextField
						value={cariunvan}
						onChange={handleInputChange}
						hiddenLabel className="cariUnvan"
						id = "cariUnvan1"
						label="Cari Unvan *"
						variant="outlined" />
				</div>

				<div id="adSoyadContainer">
					<TextField
						value={name}
						onChange={handleInputChange}
						hiddenLabel className="ad_Soyad"
						id = "ad_Soyad1"
						label="Ad Soyad *"
						variant="outlined" />
				</div>

			</div>

			<div id="row2">
				<div id="KullanıcıAdıContainer">
					<TextField
						value={username}
						onChange={handleInputChange}
						hiddenLabel className="kullaniciadi"
						id = "kullaniciadi1"
						label="Kullanıcı Adı *"
						variant="outlined" />
				</div>

				<div id="telefonContainer">
					<TextField
						value={phoneNumber}
						onChange={handleInputChange}
						hiddenLabel className="telefonNumarası"
						id = "telefonNumarasi1"
						label="Telefon Numarası *"
						variant="outlined" />
				</div>

			</div>

			<div id="mailContainer">
				<TextField
					value={mail}
					onChange={handleInputChange}
					hiddenLabel className="mailAdresi"
					id = "mailAdresi1"
					label="Mail Adresi *"
					variant="outlined" />
			</div>
			<div >
				<TextField
					value={password}
					onChange={handleInputChange}
					className="inputPassword"
					id = "inputPassword1"
					label="Şifre *"
					type="password"
					autoComplete="current-password"
					variant="outlined"
				/>
			</div>

			<div id="admin">
				<FormControlLabel 
				onChange={buttonClicked} control={<Checkbox />} label="Admin" />
			</div>

			<div
				id="actions">

				<Button onClick={saveClicked} className="Button" variant="contained" color="primary" >
					Kaydet
				</Button>

			</div>

		</Box>
	);
}

export default AddUser