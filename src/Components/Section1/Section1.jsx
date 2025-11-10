/** @format */
import React from 'react';
import Navbar from './Navbar';
import Center from './Center';

function Section1() {
	return (
		<section className='h-[95vh] w-[95vw] bg-white px-6 md:px-20 pl-24 py-2 rounded-2xl flex flex-col'>
			<Navbar />
			<div className='flex-1 flex  justify-center'>
				<Center />
			</div>
		</section>
	);
}

export default Section1;
