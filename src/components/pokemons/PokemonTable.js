import React from 'react';
import PropTypes from 'prop-types';

import '../../css/PokemonTable.css';
import PokemonItem from './PokemonItem';

const PokemonTable = props => {
	return (
		<ul className="cards mt-3">
			{ props.pokemons.map(pokemon => 
				<PokemonItem key={ pokemon.name } id={ pokemon.url.substring(pokemon.url.lastIndexOf('/', pokemon.url.length - 2) + 1, pokemon.url.length - 1) } pokemon={ pokemon } />
			) }
		</ul>
	)
}

PokemonTable.propTypes = {
	pokemons: PropTypes.array.isRequired
}

export default PokemonTable;