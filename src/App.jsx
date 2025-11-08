/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='parent'>
				<div className='child1'>3</div>
			</div>
		</>
	);
}

export default App;
