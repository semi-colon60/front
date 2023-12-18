import { createTheme } from "@mui/material";

const customTheme = createTheme({
	palette: {
		primary: {
			main: '#ff9500',
			light: '#ffaa00',
			dark: '#b26800',
		},
		secondary: {
			main: '#000000',
			light: '#333333',
			dark: '#ffffff',
		},
		background: {
			default: '#FFF8F5',
			paper: '#FFF8F5',
		},
	},
});

export default customTheme;