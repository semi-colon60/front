import { Button, ListItem, TextField } from "@mui/material";
import './CustomListItem.css'

const CustomListItem = (props:
	{primary: string,
	name: string,
	defaultValue: string, 
	isEditing: boolean,
	setEditing: React.Dispatch<React.SetStateAction<boolean>>,
	saveHandler: () => void,
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
	errorState: boolean,
	}) => {

	return (
		<ListItem className = 'CustomListItem'>
			{
				// props.isEditing
				// ?
				<TextField className = 'CustomTextField'
					error = {props.errorState}
					id = "outlined-required" 
					name = {props.name}
					// required = {true}
					defaultValue = {props.defaultValue}
					// onClick = {()=>{props.setEditing(true)}}
					onChange = {props.changeHandler}
					focused = {props.isEditing}
					// type = {props.name}
					// disabled= {!props.isEditing}
					label = {props.primary}
					variant = "standard" 
					helperText = {
						props.errorState 
						? "Geçerli bir " + props.primary + " giriniz"
						: ' '
					}
					InputProps = {
						props.isEditing
						?{readOnly: false,}
						:{readOnly: true,}
						// {readOnly: true, error: true}
					}
				/>
				// : 
				// <ListItemText primary = {props.primary} />
			}
			<Button className = 'CustomButton'
				onClick = {() => {
					if(props.errorState != true)
					{
						props.setEditing(!props.isEditing);
						if(props.isEditing)
							 props.saveHandler();
					}
					}}>
				{props.isEditing ? 'Kaydet' : 'Düzenle'}
			</Button>
		</ListItem>
	)
}

export default CustomListItem
