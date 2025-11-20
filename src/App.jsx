/** @format */

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import gradient from './assets/gradient.png';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/hero';
import 'aos/dist/aos.css';
import Aos from 'aos';
function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return (
		<>
			<main>
				<img
					className=' absolute top-0 right-0 opacity-60 -z-1 '
					src={gradient}
					alt='bg-img'
				/>
				<div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
				<Header />
				<Hero />
			</main>
		</>
	);
}

export default App;
