import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeBadge from '../TypeBadge';

export default class InfoTable extends Component {
	render() {
		return (
			<ul className="list-group list-group-flush font-weight-bold mb-4">
				<li className="list-group-item d-flex flex-row">
					<span className="mr-2 w-25 text-right text-muted">Nat. №</span>
					<span className="ml-2 w-75">{ this.props.pokemon.id.toString().padStart(4, '0') }</span>
				</li>
				<li className="list-group-item d-flex flex-row">
					<span className="mr-2 w-25 text-right text-muted">Type</span>
					<span className="ml-2 w-75">
						{ this.props.pokemon.types.map(type => 
							<TypeBadge key={ type.type.name } type={ type.type.name } />
						) }
					</span>
				</li>
				<li className="list-group-item d-flex flex-row">
					<span className="mr-2 w-25 text-right text-muted">Height</span>
					<span className="ml-2 w-75">{ (this.props.pokemon.height / 10.0).toFixed(1) } m</span>
				</li>
				<li className="list-group-item d-flex flex-row">
					<span className="mr-2 w-25 text-right text-muted">Weight</span>
					<span className="ml-2 w-75">{ (this.props.pokemon.weight / 10.0).toFixed(1) } kg</span>
				</li>
				<li className="list-group-item d-flex flex-row">
					<span className="mr-2 w-25 text-right text-muted">Abilities</span>
					<span className="ml-2 w-75">
							{ this.props.pokemon.abilities.map(ability => 
								<div key={ ability.slot }>
									<span className="text-capitalize">{ ability.ability.name }</span>
									<span className="text-muted font-weight-light">{ ability.is_hidden ? " (hidden)" : "" }</span>
								</div>
							) }
					</span>
				</li>
			</ul>
		)
	}
}

InfoTable.propTypes = {
	pokemon: PropTypes.object.isRequired
}