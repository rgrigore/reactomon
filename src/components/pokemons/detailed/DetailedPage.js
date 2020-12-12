import React, { Component } from 'react';

import DataHandler from '../../../DataHandler';
import InfoTable from './InfoTable';
import StatsTable from './StatsTable';

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
		return (
			<div className="container-lg w-75 mt-5 rounded-lg" style={{ background: "rgb(230, 255, 253)" }}>
				<div className="row">
					<div className="col-4"><img className="img-fluid" src={ this.state.pokemon.sprites.front_default } alt="..." width="100%" /></div>
					<div className="col-4">
						<h2 className="font-weight-bold my-3 text-capitalize text-center">{ this.state.pokemon.name }</h2>
						<InfoTable pokemon={ this.state.pokemon } />
					</div>
					<div className="col-4">
						<StatsTable stats={ this.state.pokemon.stats } />
					</div>
				</div>
			</div>
		)
	}
}
