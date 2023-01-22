// MUI components
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export const Header = () => {
	return (
		<>
			<Container maxWidth="lg" sx={{ mt: 20, mb: 10 }}>
				<Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					KBSB Data Dashboard
				</Typography>

				<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					A basic data dashboard built with Django, React, MUI, and ApexCharts.
				</Typography>
			</Container>
		</>
	);
};
