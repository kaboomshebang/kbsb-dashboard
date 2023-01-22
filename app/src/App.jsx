import { useState } from 'react';

// MUI components
import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';

// interface
import { NavBar } from '@/components/interface/NavBar';
import { Header } from '@/components/interface/Header';

export const App = () => {
	return (
		<>
			<CssBaseline />

			<NavBar />

			<Box
				component="main"
				sx={{
					backgroundColor: grey[100],
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
			>
				<Header />

				{/* Dashboard */}

				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8} lg={9}>
							<Paper
								sx={{
									p: 2,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<EuroDollar />
							</Paper>
						</Grid>
						<Grid item xs={12} md={8} lg={9}>
							<Paper
								sx={{
									p: 2,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<EuroDollar />
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Footer */}
		</>
	);
};
