import React, { useState, useEffect } from 'react';

import PokemonTable from './PokemonTable';
import DataHandler from '../../DataHandler';

const PokemonsPage = () => {

	const [state, setState] = useState({
		prevPage: false,
		nextPage: false,
		pokemons: []
	});

	const updateState = (data) => {
		setState({
			prevPage: data.previous != null,
			nextPage: data.next != null,
			pokemons: data.results
		})
	}

	const nextPage = () => {
		DataHandler.nextPokemons(updateState);
	};

	const previousPage = () => {
		DataHandler.previousPokemons(updateState);
	};

	useEffect(() => { DataHandler.initPokemons(updateState); }, []);

	return (
		<div className="container-fluid">
			<div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
			<button type="button" className="btn btn-info" onClick={previousPage} disabled={!state.prevPage}>Previous</button>
			<button type="button" className="btn btn-info" onClick={nextPage} disabled={!state.nextPage}>Next</button>
			</div>
			<PokemonTable pokemons={state.pokemons} />
		</div>
	)
}

export default PokemonsPage;