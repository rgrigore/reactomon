import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataHandler from '../../DataHandler';
// import '../../css/PokemonTable.css';

export default class PokemonItem extends Component {

	state = {
		image: ""
	}

	componentDidMount() {
		DataHandler.getPokemonImage(this.props.pokemon.url, img => this.setState({ image: img }));
	}

	render() {
		return (
			<li className="cards-item">
				<div className="card text-center mr-3">
					<img src={ this.state.image } className="card-img-top img-fluid" alt="..." />
					<div className="card-body">
						<p className="card-title text-capitalize font-weight-bold">{ this.props.pokemon.name }</p>
					</div>
				</div>
			</li>
		)
	}
}

PokemonItem.propTypes = {
	pokemon: PropTypes.object.isRequired
}