'use client';
import React from 'react'
import { useState, useEffect } from "react";
import MaterialForm from '@/app/components/Forms/MaterialForm';
import {fetchForMainGroupsAddMaterial} from '@/app/fetch/fetchForAddMaterial';
import MainGroup from '@/app/modules/MainGroup';

const page = () => {

	const [mainGroups, setMainGroups] = useState<MainGroup[]>([]);

	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const data = await fetchForMainGroupsAddMaterial(); // Replace with your actual API function
		  setMainGroups(data);
		} catch (error) {
		  console.error('Error fetching main groups:', error);
		}
	  };
  
	  fetchData();
	}, []);

	return (
		<MaterialForm mainGroups={mainGroups}></MaterialForm>
	)
}

export default page