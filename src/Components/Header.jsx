/** @format */

import { Menu } from 'lucide-react';
import React, { useRef, useState } from 'react';

function Header() {
	const [open, setopen] = useState(false);
	const togglemenu = () => {
		return setopen(!open);
	};
	return (
		<header
			data-aos='fade-down'
			data-aos-easing='linear'
			className='flex justify-between items-center py-4 px-4 lg
:px-20'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
				GarvCode
			</h1>
			<nav className='hidden md:flex items-center gap-12'>
				<a
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='1500'
					href='#'
					className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
					PROJECT
				</a>
				<a
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='2000'
					href='#'
					className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
					ABOUT
				</a>
				<a
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='2500'
					href='#'
					className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
					CONTACT
				</a>
			</nav>
			<button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium border-none transition-all duration-500 hover:bg-white cursor-pointer z-50 '>
				Sign In
			</button>
			<button
				onClick={togglemenu}
				className='md:hidden text-3xl p-2 z-50'>
				<Menu />
			</button>
			<div
				className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md 
                    transition-all duration-500
                    ${
											open
												? 'opacity-100 translate-y-0 pointer-events-auto'
												: 'opacity-0 -translate-y-5 pointer-events-none'
										}
                  `}>
				<nav className='flex flex-col gap-6 items-center'>
					<a
						href='#'
						className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
						PROJECT
					</a>
					<a
						href='#'
						className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
						ABOUT
					</a>
					<a
						href='#'
						className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
						CONTACT
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
