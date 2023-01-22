import React from 'react';
import ReactDOM from 'react-dom/client';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: ['Public Sans', 'sans-serif'].join(','),
	},
});

// component imports
import { App } from '@/App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
