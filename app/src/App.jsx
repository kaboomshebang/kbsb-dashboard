// MUI components
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';

// interface
import { NavBar } from '@/components/interface/NavBar';
import { Header } from '@/components/interface/Header';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { Footer } from '@/components/interface/Footer';

export const App = () => {
	return (
		<>
			<CssBaseline />

			<Box
				component="main"
				sx={{
					backgroundColor: grey[100],
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
			>
				<NavBar />
				<Header />

				<Dashboard />
				<Footer />
			</Box>
		</>
	);
};
