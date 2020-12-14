import './App.css';
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import PCContext from './components/contexts/PCContext';

const App = () => {

	const [capturedPKM, setCapturedPKM] = useState([])

	const toggleCaptured = id => {

		const pokemon = [];
		Array.prototype.push.apply(pokemon, capturedPKM);
		const index = pokemon.indexOf(id);

		if (index > -1) {
			pokemon.splice(index, 1);
		} else {
			pokemon.push(id);
			pokemon.sort((a, b) => a - b);
		}
		setCapturedPKM(pokemon);
	}

	return (
		<div>
			<PCContext.Provider value={{ capturedPKM, toggleCaptured }}>
				<NavBar />
			</PCContext.Provider>
		</div>
	)
}

export default App;