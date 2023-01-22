import { useState } from 'react';
import reactLogo from './assets/kaboom_shebang_logo.svg';
import './App.css';

import { EuroDollar } from '@/components/EuroDollar';

function App() {
	return (
		<div className="App">
			<h1>KBSB Dashboard</h1>
			<h2>A data dashboard built with React, Django and ApexCharts</h2>
			<div>
				<img src={reactLogo} alt="Kaboom" />
			</div>
			<div>
				<EuroDollar />
			</div>
		</div>
	);
}

export default App;
