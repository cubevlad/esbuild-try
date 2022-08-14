import React, { useState } from 'react';

const App = () => {
	const [state, setState] = useState(0);
	console.log('rerendered');

	const handleClick = () => setState((prevState) => prevState + 1);

	return (
		<div>
			App
			<p> current count is {state}</p>
			<button onClick={handleClick}> click me </button>
		</div>
	);
};

export default App;
