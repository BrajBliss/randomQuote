import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [advice, setAdvice] = useState(' ');

	useEffect(() => {
		axios.get('https://api.adviceslip.com/advice')
			.then((response) => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <h1>{advice}</h1>;
};

export default App;
