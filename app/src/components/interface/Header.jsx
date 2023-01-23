// MUI components
import { Container, Link } from '@mui/material';
import { Typography } from '@mui/material';

export const Header = () => {
	return (
		<>
			<Container maxWidth="lg" sx={{ mt: 20, mb: 10 }}>
				<Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					kbsb-dashboard
				</Typography>

				<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					A basic data dashboard built with Django, React, MUI, and ApexCharts.
				</Typography>

				<Link
					href="https://kbsb-dashboard.fly.dev/api/eurodollars/"
					target="_blank"
					rel="noopener noreferrer"
				>
					View the Django API endpoint
				</Link>
			</Container>
		</>
	);
};
