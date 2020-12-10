import React, { Component } from 'react';

import DataHandler from '../../../DataHandler';

export default class DetailedPage extends Component {
	
	state = {
		pokemon: {
			abilities: [],
			base_experience: 0,
			forms: [],
			game_indices: [],
			height: 0,
			held_items: [],
			id: 0,
			is_default: true,
			location_area_encounters: "",
			moves: [],
			name: "",
			order: 0,
			species: {},
			sprites: {},
			stats: [],
			types: [],
			weight: 0,
		}
	}

	componentDidMount() {
		DataHandler.pokemonById(this.props.match.params.id, data =>
			this.setState({ pokemon: data })
		);
	}

	render() {
		console.log(this.state.pokemon);
		return (
			<div>
				{ this.props.match.params.id }
				{ this.state.pokemon.name }
			</div>
		)
	}
}
