import React from 'react'
import fetchTotalsForUserMaterialsPage from '@/app/fetch/fetchForUserMaterials/fetchTotalsForUserMaterialsPage';
import TotalCartValues from '@/app/modules/TotalCartValues';

interface MaterialPageContextType {
	totalPrice: number,
	totalWeight: number,
	totalVolume: number,
	commercialId: number,
	isSuccessAlertOpen: boolean,
	setIsSuccessAlertOpen: React.Dispatch<React.SetStateAction<boolean>>,
	fetchTotals: () => void
}

const MaterialPageContext = React.createContext<MaterialPageContextType>({
	totalPrice: 0,
	totalWeight: 0,
	totalVolume: 0,
	commercialId: 0,
	isSuccessAlertOpen: false,
	setIsSuccessAlertOpen: () => { },
	fetchTotals: () => { }
});

export const useMaterialPageContext = () => React.useContext(MaterialPageContext);

type MaterialPageProviderProps = {
	children: React.ReactNode
}

const MaterialPageProvider = (props: MaterialPageProviderProps) => {
	const [totalPrice, setTotalPrice] = React.useState(0.0);
	const [totalWeight, setTotalWeight] = React.useState(0.0);
	const [totalVolume, setTotalVolume] = React.useState(0.0);
	const [isSuccessAlertOpen, setIsSuccessAlertOpen] = React.useState(false);
	const [commercialId, setCommercialId] = React.useState(12);

	const fetchTotals = async () => {
		const totals: TotalCartValues = await fetchTotalsForUserMaterialsPage(commercialId);
		setTotalPrice(totals.totalPrice);
		setTotalWeight(totals.totalWeight);
		setTotalVolume(totals.totalVolume);
	}

	return (
		<MaterialPageContext.Provider
			value={{
				commercialId,
				totalPrice,
				totalWeight,
				totalVolume,
				isSuccessAlertOpen,
				setIsSuccessAlertOpen,
				fetchTotals
			}}
		>
			{props.children}
		</MaterialPageContext.Provider>
	)
}

export default MaterialPageProvider;
