import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonItem = props => {
	return (
		<li className="cards-item">
			<Link to={ `/pokemon/${ props.id }` }>
				<div className="card text-center mr-3">
					<img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ props.id }.png` } className="card-img-top img-fluid" alt="..." />
					<div className="card-body">
						<p className="card-title text-capitalize font-weight-bold">{ props.pokemon.name }</p>
					</div>
				</div>
			</Link>
		</li>
	)
}

PokemonItem.propTypes = {
	id: PropTypes.string.isRequired,
	pokemon: PropTypes.object.isRequired
}

export default PokemonItem;