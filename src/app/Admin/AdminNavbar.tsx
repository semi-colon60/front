import React from 'react'
import ApplicationBar from '../components/AppBar/ApplicationBar';
import StyledTab from '../components/AppBar/CustomTabs/StyledTab';
import Link from 'next/link';

const AdminNavbar = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	}

	return (
		<div>
			<ApplicationBar
				value={value}
				handleChange={handleChange}
			>
				<StyledTab label='SİPARİŞ LİSTESİ' value={0} component={Link} href={"/Admin/orderReview"} />
				<StyledTab label='KULLANICI EKLE' value={1} component={Link} href={"/Admin/addCustomer"} />
				<StyledTab label='MALZEME EKLE' value={2} component={Link} href={"/Admin/addMaterial"} />
			</ApplicationBar>

		</div>
	)
}

export default AdminNavbar
