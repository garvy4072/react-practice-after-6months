/** @format */

import { useState } from 'react';

import './App.css';
import Card from './Components/Card';
import { mountainData } from './assets/data';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className=' h-full w-full flex flex-col justify-between items-center gap-5 py-3.5 bg-[#c0c9d5] '>
				<Section1 />
				<Section2 />
			</div>
		</>
	);
}

export default App;
