"use client"
import UserCartSummaryCard from '@/app/components/Cards/UserCartSummaryCard'
import UserMaterialListDataGrid from '@/app/components/DataGrid/UserMaterialListDataGrid'
import GroupsDropDown from '@/app/components/DropDowns/GroupsDropDown'
import { useMaterialPageContext } from '@/app/contexts/MaterialPageProvider'
import fetchGroupsInUserMaterialsListPage from '@/app/fetch/fetchForUserMaterials/fetchGroupsInUserMaterialsListPage'
import fetchMaterialsForUserMaterialsList from '@/app/fetch/fetchForUserMaterials/fetchMaterialsForUserMaterialsList'
import MainGroup from '@/app/modules/MainGroup'
import Material from '@/app/modules/Material'
import SubGroup from '@/app/modules/SubGroup'
import { getUnitName } from '@/app/modules/UnitType'
import { Box, Grid } from '@mui/material'
import { GridRowsProp } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import '@/app/User/materials/global.css'
import SuccessAlert from '@/app/components/Alerts/SuccessAlert'

const page = () => {
	const [materialsInTable, setMaterialsInTable] = React.useState<GridRowsProp>([]);
	const [mainGroups, setMainGroups] = React.useState<MainGroup[]>();
	const [subGroups, setSubGroups] = React.useState<SubGroup[]>();
	const [currentMainGroup, setCurrentMainGroup] = React.useState<MainGroup>();
	const [currentSubGroup, setCurrentSubGroup] = React.useState<SubGroup>();
	const isDataFetched = React.useRef(false);
	const { fetchTotals, isSuccessAlertOpen, setIsSuccessAlertOpen } = useMaterialPageContext();

	const fetchMainGroups = async () => {
		const _mainGroups = await fetchGroupsInUserMaterialsListPage();
		setMainGroups(_mainGroups);
	}

	const fetchSubGroups = async (id: number) => {
		const _subGroups = await fetchGroupsInUserMaterialsListPage(id);
		setSubGroups(_subGroups);
	}

	const fetchMaterials = async () => {
		const materials = await fetchMaterialsForUserMaterialsList(currentMainGroup?.mainGroupId, currentSubGroup?.subGroupId);
		const transformMaterialsToDataGridRows = materials.map((material: Material) => {
			let unitType: string = getUnitName(material.unit);
			return {
				id: material.materialId,
				productNo: material.materialCode,
				productName: material.description,
				price: material.unitPrice,
				mass: material.mass,
				volume: material.volume,
				unit: unitType,
				amount: 1
			}
		});
		setMaterialsInTable(transformMaterialsToDataGridRows);
	}

	const onHandleMainGroupDropDownChange = (event: any) => {
		// if blank choise is selected, reset current main group and sub groups
		if (event.target.value === "") {
			setCurrentMainGroup(undefined);
			setSubGroups([]);
			return;
		}

		const _mainGroup: MainGroup = event.target.value;
		setCurrentMainGroup(_mainGroup);

		// reset current sub group
		setCurrentSubGroup(undefined);
		fetchSubGroups(_mainGroup.mainGroupId);
	}

	const onHandleSubGroupDropDownChange = (event: any) => {
		const _subGroup: SubGroup = event.target.value;
		setCurrentSubGroup(_subGroup);
	}

	// fetch main groups and materials when page loads
	useEffect(() => {
		if (!isDataFetched.current) {
			fetchMaterials();
			fetchMainGroups();
			fetchTotals();
			isDataFetched.current = true;
		}

		return () => {
			setMaterialsInTable(prev => []);
			setMainGroups(prev => []);
		}
	}, [])

	// fetch materials when main group or sub group changes
	useEffect(() => {
		fetchMaterials();
	}, [currentMainGroup, currentSubGroup]);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (isSuccessAlertOpen) {
			timer = setTimeout(() => {
				setIsSuccessAlertOpen(false);
			}, 2500);
		}

		// clear the timeout
		return () => clearTimeout(timer);
	}, [isSuccessAlertOpen]);

	return (
		<Box>
			<Grid container spacing={4} className="main-container">

				<Grid item xs={0.5}></Grid>
				<Grid item xs={2}>
					<GroupsDropDown
						text="Ana Kategori"
						groups={mainGroups}
						onHandleGroupDropDownChange={onHandleMainGroupDropDownChange}
					/>
				</Grid>
				<Grid item xs={2}>
					<GroupsDropDown
						text="Alt Kategori"
						groups={subGroups}
						onHandleGroupDropDownChange={onHandleSubGroupDropDownChange}
					/>
				</Grid>
				<Grid item xs={7.5}></Grid>

				<Grid item xs={9}>
					<UserMaterialListDataGrid rows={materialsInTable} />
				</Grid>
				<Grid item xs={3} justifyContent='center'>
					<UserCartSummaryCard />
				</Grid>
			</Grid>
			<Grid className='success-alert-box'>
				<SuccessAlert
					open={isSuccessAlertOpen}
					onButton={() => setIsSuccessAlertOpen(false)}
					Message='Ürün sepete eklendi.'
				/>
			</Grid>
		</Box>
	)
}

export default page;
