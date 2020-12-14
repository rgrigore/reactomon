import React from 'react';
import PropTypes from 'prop-types';

import TypeColor from './TypeColor';

const TypeItem = props => {
	return (
		<li className="cards-item">
			<div className="card text-center mr-3" style={{ backgroundColor: TypeColor[props.type.name], color: "white" }}>
				<div className="card-body">
					<p className="card-title text-capitalize font-weight-bold">
						{ props.type.name }
					</p>
				</div>
			</div>
		</li>
	)
}

TypeItem.propTypes = {
	type: PropTypes.object.isRequired
}

export default TypeItem;