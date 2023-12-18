import { Avatar, Box, Button,  Divider, List, ListItem, ListItemText, TextField, } from '@mui/material'
import React from 'react'
import CommercialId from '../../modules/CommercialId'
import './AccountInfo.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import CustomListItem from './CustomListItem';
import { isNumber } from '@mui/x-data-grid/internals';


interface AccountInfoProps {
	account: CommercialId | null,
	setAccount: React.Dispatch<React.SetStateAction<CommercialId | null>>,
	updateAccount: () => {},
}

const AccountInfo = (props: AccountInfoProps) => {
	const [isEditingName, setEditingName] = React.useState<boolean>(false);
	const [isEditingSurname, setEditingSurname] = React.useState<boolean>(false);
	const [isEditingUsername, setEditingUsername] = React.useState<boolean>(false);
	const [isEditingCommercialTitle, setEditingCommercialTitle] = React.useState<boolean>(false);
	const [isEditingPhone, setEditingPhone] = React.useState<boolean>(false);
	const [isEditingEmail, setEditingEmail] = React.useState<boolean>(false);

	const [isNameError, setNameError] = React.useState<boolean>(false);
	const [isSurnameError, setSurnameError] = React.useState<boolean>(false);
	const [isPhoneError, setPhoneError] = React.useState<boolean>(false);
	const [isEmailError, setEmailError] = React.useState<boolean>(false);


	if(props.account == null)
		return (
			<Box className = 'accountBox'>
				<center>loading...</center>
			</Box>
		)

	const handleSave = () => {
		// console.log('(handleSave) phone: ' + props.account?.phone)
		// console.log('\nxd\n')
		props.updateAccount()
	}

	const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
		if(props.account == null)
			return

		if(e.target.name == 'name')
			setNameError(!(/^[\p{L}\p{M}'\.\-\s]+$/u.test(e.target.value)))
		
		if(e.target.name == 'surname')
			setSurnameError(!(/^[\p{L}\p{M}'\.\-\s]+$/u.test(e.target.value)))
		
		if(e.target.name == 'email')
			setEmailError(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-]+.)+[a-zA-Z]{2,}))$/.test(e.target.value)))
		
		if(e.target.name == 'phone')
			setPhoneError(!(/^(?:\+|\d{1,3}) ?(?:[0-9] ?){6,14}[0-9]$/.test(e.target.value)))

		props.setAccount({
			...props.account,
			[e.target.name] : e.target.value,
		})
		// console.log('(handleChange) ' + e.target.name + ': ' + e.target.value)
		// console.log('(handleChange) phone: ' + tempAccount.phone)
	}

	// useEffect(() => {

	// }, [isEditingPhone]);

	
	return (
		<Box className = 'accountBox'>
			<Box className = 'avatarbox'>
				<Avatar className = 'avatar' >
					<AccountCircleIcon className = 'avatar' color = 'action'/>
				</Avatar>
				<h2 className = 'accountname'>{props.account.name + ' ' + props.account.surname}</h2>
			</Box>

			<List className = 'accountBoxList' component = "nav" aria-label = "mailbox folders">
				
				<CustomListItem 
					primary = 'İsim'
					name = 'name'
					defaultValue = {props.account.name}
					isEditing = {isEditingName}
					setEditing = {setEditingName}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {isNameError}
				></CustomListItem>
				{/* <Divider light /> */}

				<CustomListItem 
					primary = 'Soyisim'
					name = 'surname'
					defaultValue = {props.account.surname}
					isEditing = {isEditingSurname}
					setEditing = {setEditingSurname}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {isSurnameError}
				></CustomListItem>
				{/* <Divider light /> */}
				
				<CustomListItem 
					primary = 'Kullanıcı Adı'
					name = 'username'
					defaultValue = {props.account.username}
					isEditing = {isEditingUsername}
					setEditing = {setEditingUsername}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {false}
				></CustomListItem>
				{/* <Divider light /> */}

				
				<CustomListItem 
					primary = 'Cari Ünvan'
					name = 'commercialTitle'
					defaultValue = {props.account.commercialTitle}
					isEditing = {isEditingCommercialTitle}
					setEditing = {setEditingCommercialTitle}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {false}
				></CustomListItem>
				{/* <Divider light /> */}

				
				<CustomListItem 
					primary = 'Telefon'
					name = 'phone'
					defaultValue = {props.account.phone}
					isEditing = {isEditingPhone}
					setEditing = {setEditingPhone}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {isPhoneError}
				></CustomListItem>
				{/* <Divider light /> */}

				
				<CustomListItem 
					primary = 'E-posta Adresi'
					name = 'email'
					defaultValue = {props.account.email}
					isEditing = {isEditingEmail}
					setEditing = {setEditingEmail}
					saveHandler = {handleSave}
					changeHandler = {handleChange}
					errorState = {isEmailError}
				></CustomListItem>

				

			</List>
		</Box>
	)
}

export default AccountInfo
