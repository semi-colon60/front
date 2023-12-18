import { Tab, styled } from "@mui/material";

interface StyledTabProps {
	label: string;
	value: number;
	component?: any;
	href?: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(15),
	marginRight: theme.spacing(5),
	color: 'rgba(0, 0, 0, 1.0)',
	'&.Mui-selected': {
		color: theme.palette.primary.main,
	}
}));

export default StyledTab;