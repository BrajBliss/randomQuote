import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [advice, setAdvice] = useState(' ');

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * 225);
		axios.get(`https://api.adviceslip.com/advice/${randomNumber}`)
			.then((response) => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const clickHandler = () => {
		const randomNumber = Math.floor(Math.random() * 225);
		axios.get(`https://api.adviceslip.com/advice/${randomNumber}`)

			.then((response) => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='app'>
			<div className='card'>
				<h1 className='heading'>{advice}</h1>
				<button className='button' onClick={clickHandler}>
					<span>Randomize!</span>
				</button>
			</div>
		</div>
	);
};

export default App;
