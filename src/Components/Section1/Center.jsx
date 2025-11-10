/** @format */

import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import ImageContainer from './ImageContainer';

function Center() {
	const people = [
		{
			id: 1,
			name: 'Satisfied Customer',
			img: 'https://i.pinimg.com/736x/82/28/84/82288486b5da113403ded5a4f886fc63.jpg',
			desc: 'Prime customers that have access to bank credit and are satisfied with the current product.',
			label: 'Satisfied',
		},
		{
			id: 2,
			name: 'Neutral Customer',
			img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80',
			desc: 'Customers with partial satisfaction and moderate access to banking products.',
			label: 'Neutral',
		},
		{
			id: 3,
			name: 'Unsatisfied Customer',
			img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80',
			desc: 'Customers that are dissatisfied and need improved product access.',
			label: 'Unsatisfied',
		},
	];
	return (
		<>
			<div className=' grid grid-cols-3 gap-1'>
				<div className='left flex flex-col justify-between pt-5'>
					<div className='headline'>
						<h1 className='text-5xl font-bold tracking-wide '>
							Prospective <span className=''>customer</span> segmentation
						</h1>
					</div>
					<div className='about h-40   font-sans  text-gray-600 text-xl tracking-wide leading-relaxed '>
						<h3>
							Depending on customer <br /> Satisfaction and access <br /> to the
							Banking products, potential <br /> target audience can be divided{' '}
							<br />
							in three groups
						</h3>
					</div>
					<div className='arrow-sign h-30 w-full relative right-7 '>
						<ArrowUpRight className='h-full w-[30%]' />
					</div>
				</div>
				<div className='image w-full flex flex-nowrap col-span-2 scrollbar-hide overflow-x-scroll   justify-center items-center h-full wrap-normal  gap-2  '>
					{people.map((person) => {
						return (
							<>
								<ImageContainer data={person} />
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Center;
