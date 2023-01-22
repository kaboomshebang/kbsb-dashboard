import { useState, useEffect } from 'react';

// MUI components
import { Box, Checkbox, FormControlLabel, FormGroup, Button, Typography } from '@mui/material';

// MUI icons
import SendIcon from '@mui/icons-material/Send';

// ApexCharts
import Chart from 'react-apexcharts';

const endpoint = 'http://100.111.214.8:8000/api/eurodollars/';

export const EuroDollar = () => {
	const [options, setOptions] = useState({});
	const [series, setSeries] = useState([]);

	useEffect(() => {
		fetch(endpoint)
			.then((res) => res.json())
			.then((data) => {
				setOptions(() => {
					return {
						chart: {
							id: 'euro-dollar',
						},
						xaxis: {
							categories: data.map((d) => d.date),
						},
					};
				});
				setSeries(() => {
					return [
						{
							name: 'dates',
							data: data.map((d) => d.priceDollar),
						},
					];
				});
			});
	}, []);

	const addNewPrice = () => {
		// TODO: add POST logic
	};

	return (
		<Box component="article">
			<Typography variant="h6" component="h1">
				EuroDollar price
			</Typography>
			<Chart options={options} series={series} type="bar" width="500" />
			<FormGroup>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Todo: add POST functionality"
				/>
				<FormControlLabel
					disabled
					control={<Checkbox />}
					label="Todo: add more API/HTTP/CRUD operations"
				/>
				<Button variant="contained" color="primary" endIcon={<SendIcon />}>
					Todo: Add new price
				</Button>
			</FormGroup>
		</Box>
	);
};
