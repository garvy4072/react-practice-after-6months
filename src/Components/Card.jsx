/** @format */
import svg from '../assets/react.svg';
function Card(props) {
	console.log(props);
	return (
		<>
			{props.data.map((da) => {
				console.log(da.image);

				return (
					<div
						key={da.id}
						className='ddr'>
						<div className='box'>
							<img
								src={
									da.image ||
									'https://plus.unsplash.com/premium_photo-1757100707921-070878fe3796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1600'
								}
								alt=''
							/>
							<div className='abo'>
								<div className='text'>
									<p className='title'>{da.title}</p>
									<p className='des'>{da.description}</p>
								</div>
								<button>view</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default Card;
