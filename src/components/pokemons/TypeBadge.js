import React, { Component } from 'react';
import PropTypes from 'prop-types';

const color = {
	normal: "#aa9",
	fire: "#f42",
	water: "#39f",
	electric: "#fc3",
	grass: "#7c5",
	ice: "#6cf",
	fighting: "#b54",
	poison: "#a59",
	ground: "#db5",
	flying: "#89f",
	psychic: "#f59",
	bug: "#ab2",
	rock: "#ba6",
	ghost: "#66b",
	dragon: "#76e",
	dark: "#754",
	steel: "#aab",
	fairy: "#e9e"
}

export default class TypeBadge extends Component {
	render() {
		return (
			<span className="badge badge-pill text-capitalize mr-1" style={{ backgroundColor: color[this.props.type], color: "white" }}>
				{ this.props.type }
			</span>
		)
	}
}

TypeBadge.propTypes = {
	type: PropTypes.string.isRequired
}