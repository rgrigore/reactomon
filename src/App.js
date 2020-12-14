import './App.css';
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import PCContext from './components/contexts/PCContext';

const App = () => {

	const [state, setState] = useState({
		capturedPKM: []
	})

	const toggleCaptured = id => {

		const pokemon = state.capturedPKM;
		const index = pokemon.indexOf(id);

		if (index > -1) {
			pokemon.splice(index, 1);
		} else {
			pokemon.push(id);
			pokemon.sort((a, b) => a - b);
		}
		setState({
			capturedPKM: pokemon
		});
	}

	return (
		<div>
			<PCContext.Provider value={{ ...state, toggleCaptured }}>
				<NavBar />
			</PCContext.Provider>
		</div>
	)
}

export default App;