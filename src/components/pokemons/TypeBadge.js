import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeColor from '../types/TypeColor';

export default class TypeBadge extends Component {
	render() {
		return (
			<span className="badge badge-pill text-capitalize mr-1" style={{ backgroundColor: TypeColor[this.props.type], color: "white" }}>
				{ this.props.type }
			</span>
		)
	}
}

TypeBadge.propTypes = {
	type: PropTypes.string.isRequired
}