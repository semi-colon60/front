"use client"
import React, { useEffect, useState } from 'react'
import fetchForAccountInformation from '@/app/fetch/profile/fetchForAccountInformation';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CommercialId from '../../modules/CommercialId';
import AccountInfo from '@/app/components/AccountInfo/AccountInfo';
import './profile.css'
import fetchForUpdateEmail from '@/app/fetch/profile/fetchForUpdateEmail';
import fetchForUpdateUsername from '@/app/fetch/profile/fetchForUpdateUsername';
import fetchForUpdatePhone from '@/app/fetch/profile/fetchForUpdatePhone';
import SuccessAlert from '@/app/components/Alerts/SuccessAlert';
import fetchForUpdateCommercialTitle from '@/app/fetch/profile/fetchForUpdateCommercialTitle';
import fetchForUpdateName from '@/app/fetch/profile/fetchForUpdateName';
import fetchForUpdateSurname from '@/app/fetch/profile/fetchForUpdateName copy';

const page = (commercial_id: number) => {
	const [account, setAccount] = React.useState<CommercialId | null>(null);
	const isDataFetched = React.useRef(false);

	
	const [successAlert, setSuccessAlert] = useState(false);
	const handleSuccess = () => {
		setSuccessAlert(false);
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (successAlert) {
			timer = setTimeout(() => {
				setSuccessAlert(false);
			}, 2500);
		}

		// clear the timeout
		return () => {
			// console.log('(useEffect) timer: ', timer)
			clearTimeout(timer)};
	}, [successAlert]);


	const getAccount = async (userid: number) => {
		await fetchForAccountInformation(userid)
			.then(data => {
				setAccount(data);
			})
			.catch((error) => console.log(error));
	}
	
	
	const updateAccount = async () => {
		if(account != null)
		{
			// console.log('(updateAccount) name: ' + account.name)
			// console.log('(updateAccount) surname: ' + account.surname)
			// console.log('(updateAccount) username: ' + account.username)
			// console.log('(updateAccount) commercialTitle: ' + account.commercialTitle)
			// console.log('(updateAccount) phone: ' + account.phone)
			// console.log('(updateAccount) email: ' + account.email)
			
			let response
			let result = true
			
			response = await fetchForUpdateName(account.commercialID, account.name)
			// .then((response) => {console.log(response)})
			.catch((error) => {console.log(error)})
			result = response?.status == 200 ? result : false

			response = await fetchForUpdateSurname(account.commercialID, account.surname)
			.catch((error) => {console.log(error)})			
			result = response?.status == 200 ? result : false

			response = await fetchForUpdateUsername(account.commercialID, account.username)
			.catch((error) => {console.log(error)})
			result = response?.status == 200 ? result : false

			response = await fetchForUpdateCommercialTitle(account.commercialID, account.commercialTitle)
			.catch((error) => {console.log(error)})			
			result = response?.status == 200 ? result : false

			response = await fetchForUpdatePhone(account.commercialID, account.phone)
			.catch((error) => {console.log(error)})

			result = response?.status == 200 ? result : false
			response = await fetchForUpdateEmail(account.commercialID, account.email)
			.catch((error) => {console.log(error)})			

			result = response?.status == 200 ? result : false

			console.log(result)

			setSuccessAlert(result)
		}
	}

	useEffect(() => {
		if (!isDataFetched.current)
		{
			// todo gelcek user id yi buraya yazcan
			isDataFetched.current = true;
			getAccount(5);
		}
		return () => {
			// setAccount(null);
		}
	}, []);

	// useEffect(() => {
	// 	if (isDataFetched.current)
	// 		updateAccount();
	// }, [account]);
	
	return (
		<div className = 'profilePageDiv'>
			<Box className = 'profilePage'>
				<Box className = 'placeholder'><h1>ADRESLER</h1></Box>
				<AccountInfo 
					account = {account}
					setAccount = {setAccount}
					updateAccount = {updateAccount}
				></AccountInfo>
			</Box>
			<Grid className = 'successAlertBox'
				// justifyContent = {'center'}
				// width = {'100vw'}
				>
				<SuccessAlert open = {successAlert} onButton = {handleSuccess} Message = 'Güncelleme başarılı.'></SuccessAlert>
				
			</Grid>
		</div>
		
	)
}

export default page;
