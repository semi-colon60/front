import React from 'react'
import ApplicationBar from '../components/AppBar/ApplicationBar';
import StyledTab from '../components/AppBar/CustomTabs/StyledTab';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserNavbar = () => {
	const [value, setValue] = React.useState(0);
	const router = useRouter();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	}

	const accountButtonOnClick = () => {
		router.push("/User/profile");
	}

	return (
		<div>
			<ApplicationBar
				value={value}
				handleChange={handleChange}
				accountButtonOnClickHandler={accountButtonOnClick}
			>
				<StyledTab label='ÜRÜNLER' value={0} component={Link} href={"/User/materials"} />
				<StyledTab label='SEPET' value={1} component={Link} href={"/User/cart"} />
			</ApplicationBar>

		</div>
	)
}

export default UserNavbar
