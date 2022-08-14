import React, { useState } from 'react';
// @ts-ignore
import logo from './image.png';

const App = () => {
	const [state, setState] = useState(0);

	const handleClick = () => setState((prevState) => prevState + 1);

	return (
		<div>
			App
			<img src={logo} />
			<p> current count is {state}</p>
			<button onClick={handleClick}> click me </button>
		</div>
	);
};

export default App;
