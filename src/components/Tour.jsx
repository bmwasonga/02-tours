import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const [readmore, setReadmore] = useState(true);

	const description = readmore ? info : `${info.substring(0, 200)}...`;

	return (
		<article className='single-tour'>
			<img src={image} alt={name} className='img' />
			<span className='tour-price'>${price}</span>
			<div className='tour-info'>
				<h5>{name}</h5>
				<p>
					{description + '  '}
					<button
						type='button'
						className='info-btn'
						onClick={() => setReadmore(!readmore)}>
						{readmore ? 'read less' : 'read more'}
					</button>
				</p>
				<button
					type='button'
					className='btn btn-block delete-btn'
					onClick={() => removeTour(id)}>
					Not interested
				</button>
			</div>
		</article>
	);
};
export default Tour;
