import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import './alerts.css'

interface SuccessAlertProps{
	open:boolean
	onButton:() => void;
	Message:string
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({open, onButton, Message})  => {

	return(
		<Collapse in={open}>
				<Alert
				className="successalert"
				action={
					<IconButton
					aria-label="close"
					color="inherit"
					size="small"
					onClick={onButton}
					>
					<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{ mb: 10 }}
				>
				{Message}
				</Alert>
			</Collapse>
	);
}

export default SuccessAlert;