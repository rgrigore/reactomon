import React, { useState, useEffect } from 'react';

import DataHandler from '../../../DataHandler';
import PokemonItem from '../PokemonItem';

const PCItem = props => {

	const [pokemon, setPokemon] = useState({
		id: 0,
		name: ""
	})

	useEffect(() => {
		DataHandler.pokemonById(props.id, data => {
			setPokemon({
				id: data.id,
				name: data.name
			});
		})
	}, [props.id])

	return (
		<PokemonItem key={ pokemon.name } id={ pokemon.id } pokemon={ pokemon } />
	)
}

export default PCItem;
