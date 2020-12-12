import React, { Component } from 'react';
import PropTypes from 'prop-types';

const statName = {
	hp: "HP",
	attack: "Attack",
	defense: "Defence",
	'special-attack': "Sp. Atk",
	'special-defense': "Sp. Def",
	speed: "Speed"
}

export default class StatsItem extends Component {
	render() {
		return (
			<li className="list-group-item d-flex flex-row font-weight-bold">
				<span className="mr-auto">{ statName[this.props.stat.stat.name] }:</span>
				<span>{ this.props.stat.base_stat }</span>
			</li>
		)
	}
}

StatsItem.propTypes = {
	stat: PropTypes.object.isRequired
}