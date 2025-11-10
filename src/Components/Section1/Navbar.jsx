/** @format */

import { CornerDownRight } from 'lucide-react';
import React from 'react';
function Navbar() {
	return (
		<>
			<div className='nav flex justify-between  py-5 '>
				<div className=' flex items-center px-6 h-10 uppercase text-base font-mono rounded-4xl tracking-wider bg-black text-white'>
					Target Audience
				</div>
				<div className='second flex gap-1  px-6 py-3 uppercase text-sm font-mono rounded-2xl tracking-widest  text-black font-bold  '>
					<CornerDownRight className='relative bottom-1' />
					Digital Banking platform
				</div>
			</div>
		</>
	);
}

export default Navbar;
