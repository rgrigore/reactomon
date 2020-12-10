import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonItem extends Component {
	render() {
		return (
			<li className="cards-item">
				<div className="card text-center mr-3">
					<img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.props.id }.png` } className="card-img-top img-fluid" alt="..." />
					<div className="card-body">
						<p className="card-title text-capitalize font-weight-bold">{ this.props.pokemon.name }</p>
					</div>
				</div>
			</li>
		)
	}
}

PokemonItem.propTypes = {
	id: PropTypes.string.isRequired,
	pokemon: PropTypes.object.isRequired
}