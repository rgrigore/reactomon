import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/PokemonTable.css';
import PokemonItem from './PokemonItem';

export default class PokemonTable extends Component {
	render() {
		return (
			<ul className="cards mt-3">
				{ this.props.pokemons.map(pokemon => 
					<PokemonItem key={ pokemon.name } id={ pokemon.url.substring(pokemon.url.lastIndexOf('/', pokemon.url.length - 2) + 1, pokemon.url.length - 1) } pokemon={ pokemon } />
				) }
			</ul>
		)
	}
}

PokemonTable.propTypes = {
	pokemons: PropTypes.array.isRequired
}