import React from 'react';
import PropTypes from 'prop-types';

const statName = {
	hp: "HP",
	attack: "Attack",
	defense: "Defence",
	'special-attack': "Sp. Atk",
	'special-defense': "Sp. Def",
	speed: "Speed"
}

const StatsItem = props => {
	return (
		<li className="list-group-item d-flex flex-row font-weight-bold">
			<span className="mr-auto">{ statName[props.stat.stat.name] }:</span>
			<span>{ props.stat.base_stat }</span>
		</li>
	)
}

StatsItem.propTypes = {
	stat: PropTypes.object.isRequired
}

export default StatsItem;