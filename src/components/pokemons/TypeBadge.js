import React from 'react';
import PropTypes from 'prop-types';

import TypeColor from '../types/TypeColor';

const TypeBadge = props => {
	return (
		<span className="badge badge-pill text-capitalize mr-1" style={{ backgroundColor: TypeColor[props.type], color: "white" }}>
			{ props.type }
		</span>
	)
}

TypeBadge.propTypes = {
	type: PropTypes.string.isRequired
}

export default TypeBadge;