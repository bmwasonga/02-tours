import { useEffect } from 'react';
import { useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	useEffect(() => {
		const fetchTours = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				const tours = await response.json();
				setLoading(false);
				setTours(tours);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>No tours left</h2>
					<button
						className='btn'
						style={{ marginTop: '2rem' }}
						onClick={() => fetchTours()}>
						Refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
};
export default App;
