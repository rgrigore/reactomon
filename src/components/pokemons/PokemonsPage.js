import React, { Component } from 'react';

import PokemonTable from './PokemonTable';
import DataHandler from '../../DataHandler';

export default class PokemonsPage extends Component {

	state = {
		prevPage: false,
		nextPage: false,
		pokemons: []
	};

	updateState = (data) => {
		this.setState({
			prevPage: data.previous != null,
			nextPage: data.next != null,
			pokemons: data.results
		})
	}

	nextPage = () => {
		DataHandler.nextPokemons(this.updateState);
	};

	previousPage = () => {
		DataHandler.previousPokemons(this.updateState);
	};

	componentDidMount() {
		DataHandler.initPokemons(this.updateState);
	}

	render() {
		return (
			<div className="container-fluid">
				<h3>Pokemons</h3>
				<div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
  				<button type="button" className="btn btn-info" onClick={this.previousPage} disabled={!this.state.prevPage}>Previous</button>
  				<button type="button" className="btn btn-info" onClick={this.nextPage} disabled={!this.state.nextPage}>Next</button>
				</div>
				<PokemonTable pokemons={this.state.pokemons} />
			</div>
		)
	}
}
