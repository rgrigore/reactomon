import './App.css';
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import PCContext from './components/contexts/PCContext';

const App = () => {

	const toggleCaptured = id => {

		const pokemon = captured;
		const index = pokemon.indexOf(id);

		if (index > -1) {
			pokemon.splice(index, 1);
		} else {
			pokemon.push(id);
			pokemon.sort((a, b) => a - b);
		}
		setCaptured(pokemon);
	}

	const [captured, setCaptured] = useState([1, 2])

	return (
		<div>
			<PCContext.Provider value={{ capturedPKM: captured, toggleCaptured: toggleCaptured }}>
				<NavBar />
			</PCContext.Provider>
		</div>
	)
}

export default App;