import { useState } from 'react';

// MUI components
import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { CssBaseline } from '@mui/material';

// Charts examples
import { EuroDollar } from '@/components/EuroDollar';

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
					backgroundColor: '#f5f5f5',
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
