import MainGroup from '@/app/modules/MainGroup'
import SubGroup from '@/app/modules/SubGroup'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import '@/app/components/DropDowns/dropdown.css'

interface GroupsDropDownProps {
	text: string,
	groups: MainGroup[] | SubGroup[] | undefined,
	onHandleGroupDropDownChange: (event: any) => void
}

const GroupsDropDown = (props: GroupsDropDownProps) => {
	return (
		<FormControl className='form-group-drop-down'>
			<InputLabel htmlFor="grouped-select">{props.text}</InputLabel>
			<Select defaultValue="" id="grouped-select" label="Grouping" onChange={props.onHandleGroupDropDownChange}>
				<MenuItem value="">
					<em>{props.text} Seçiniz</em>
				</MenuItem>
				{props.groups?.map((group) => (
					<MenuItem value={group} key={group[Object.keys(group)[0]]}>{group.name}</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default GroupsDropDown
