'use client';
import './forms.css'
import {
	Box,
	Grid,
	TextField,
	MenuItem,
	Button,
	Typography,
} from "@mui/material";
import { useState } from "react";
import MainGroup from '@/app/modules/MainGroup';
import SubGroup from '@/app/modules/SubGroup';
import Material from '@/app/modules/Material';
import { UnitType } from '@/app/modules/Material';
import { fetchForSubGroupsAddMaterial, fetchForAddMaterial } from '@/app/fetch/fetchForAddMaterial';
import SuccessAlert from '../Alerts/SuccessAlert';

interface MaterialFormProps {
	mainGroups: MainGroup[];
}

const MaterialForm: React.FC<MaterialFormProps> = ({ mainGroups }) => {
	const unitTypes = [
		"Length",
		"Mass",
		"Volume",
		"Count"
	]

	const [subGroups, setSubGroups] = useState<SubGroup[]>([]);

	const [Material, setMaterial] = useState<Material>({
		materialId: 0,
		materialCode: '',
		description: '',
		unit: UnitType.Length,
		unitPrice: '',
		mass: '',
		volume: '',
		count: 0,
		length: '',
		mainGroupId: 0,
		subGroupId: 0
	});

	const [open, setOpen] = useState(false);
	const handleButton = () => {
		setOpen(false);
	};

	const handleMainGroupChange = (event: any) => {
		handleChange(event);
		const value = event.target.value;
		const fetchData = async () => {
			try {
				const data = await fetchForSubGroupsAddMaterial(value); // Replace with your actual API function
				setSubGroups(data);
			} catch (error) {
				console.error('Error fetching sub groups:', error);
			}
		};
		fetchData();
	}

	const handleChange = (event: any) => {
		setMaterial({
			...Material,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = async () => {
		try {
			await fetchForAddMaterial(Material);
			setOpen(true);
			console.log('Data added successfully');

		} catch (error) {
			console.error('Error adding data:', error);
		}
	}

	return (
		<div>

			<Box
				component="form"
				className='materialformbox'
			>
				<Grid container spacing={1} className='materialform'>
					<Grid item xs={12} display={'flex'} alignItems='center' justifyContent='center'>
						<Typography variant="h4" className='materialformtitle' mt={2}>Malzeme Ekle</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h5" className='materialformheader'>Malzeme Kartı Bilgileri</Typography>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							id="outlined-required"
							label="Malzeme Kodu"
							multiline
							name='materialCode'
							className='formelement'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							id="outlined-required"
							label="Malzeme Tanımı"
							multiline
							name='description'
							className='formelement'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="outlined-required"
							label="Fiyat"
							multiline
							name='unitPrice'
							className='formelement'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="outlined-required"
							label="Ağırlık"
							multiline
							name='mass'
							className='formelement'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="outlined-required"
							label="Hacim"
							multiline
							name='volume'
							className='formelement'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="outlined-select-currency"
							select
							label="Birim"
							multiline
							className='formelement'
							name='unit'
							defaultValue=''
							onChange={handleChange}
						>
							{unitTypes.map((option, index) => (

								<MenuItem key={index} value={index}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="mainGroupDropDown"
							select
							label="Ana Grup"
							multiline
							className='formelement'
							name='mainGroupId'
							defaultValue=''
							onChange={handleMainGroupChange}
						>
							{mainGroups.map((option) => (
								<MenuItem key={option.mainGroupId} value={option.mainGroupId}>
									{option.name}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={6}>

						<TextField
							required
							id="subGroupDropDown"
							select
							label="Alt Grup"
							multiline
							className='formelement'
							name='subGroupId'
							defaultValue=''
							onChange={handleChange}
						>
							{subGroups.map((option) => (
								<MenuItem key={option.subGroupId} value={option.subGroupId}>
									{option.name}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained"
							onClick={handleSubmit}
							sx={{ color: '#FFFFFF' }}
						>EKLE</Button>
					</Grid>
				</Grid>
			</Box>
			<Grid >
				<SuccessAlert open={open} onButton={handleButton} Message='Malzeme başarıyla eklendi'></SuccessAlert>
			</Grid>
		</div>
	);
};

export default MaterialForm;
