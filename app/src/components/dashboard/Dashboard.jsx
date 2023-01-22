import { Container, Grid, Paper } from '@mui/material';

// Charts examples
import { EuroDollar } from '@/components/dashboard/apexcharts/EuroDollar';

export const Dashboard = () => {
	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper
						sx={{
							p: 4,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<EuroDollar />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
