/** @format */

import Spline from '@splinetool/react-spline';
import { DiamondIcon, MessageCircleMore } from 'lucide-react';

function Hero() {
	return (
		<main className=' flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
			<div
				data-aos='fade-right'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'
				className=' max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
				<div className=' relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
					<div className=' absolute inset-[3px] bg-black rounded-full flex justify-center items-center gap-2'>
						<DiamondIcon />
						INTRODUCING
					</div>
				</div>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
					EMAIL FOR <br /> DEVELOPER
				</h1>
				<p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi
					perferendis tempore cupiditate debitis possimus magnam alias illum.
					Eveniet quibusdam inventore sed cum a nemo velit debitis recusandae ab
					distinctio?
				</p>
				<div className=' '>
					<a
						className='border flex gap-2 border-[#2a2a2a ] w-fit py-2 sm:py-3 px-3 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider mt-3 transition-all duration-300 hover:bg-[#1a1a1a]'
						href='#'>
						CONTACT <MessageCircleMore />{' '}
					</a>
				</div>
			</div>

			<Spline
				data-aos='fade-left'
				data-aos-anchor='#example-anchor'
				data-aos-offset='500'
				data-aos-duration='1000'
				className=' absolute lg:top-0 left-[0%] bottom-0 lg:left-[25%] sm:left-[25%] h-full'
				scene='https://prod.spline.design/OBByEgSvSWSfjoFr/scene.splinecode'
			/>
		</main>
	);
}

export default Hero;
