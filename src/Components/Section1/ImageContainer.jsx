/** @format */

import React from 'react';
import { mountainData } from '../../assets/data';
import { ArrowRight } from 'lucide-react';
function ImageContainer(props) {
	const des = mountainData[0].image;
	return (
		<div
			key={props.data.id}
			className='relative shrink-0 h-[550px] w-[260px] rounded-3xl overflow-hidden  bg-amber-200 '>
			<img
				className=' object-cover h-full w-full'
				src={props.data.img}
				alt=''
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/90 '></div>
			<div className=' absolute top-6 left-7 p-1 px-3.5 font-semibold text-xl rounded-full bg-white'>
				{props.data.id}
			</div>
			<div className=' absolute font-sans left-5 w-[80%] px-2 text-2xl text-white bottom-25'>
				prime customers , that have access to bank credit and are satisfied with
				the current product
			</div>
			<div className=' gfd absolute bottom-5   text-xl rounded-4xl left-7.5 flex  justify-between items-center px-3  w-35 h-12 bg-[#4b63ff] text-white'>
				<p>Satisfied</p>
				<ArrowRight />
			</div>
		</div>
	);
}

export default ImageContainer;
