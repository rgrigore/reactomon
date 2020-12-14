import React from 'react';
import PropTypes from 'prop-types';

import TypeItem from './TypeItem';

const TypesTable = props => {
	return (
		<ul className="cards mt-3">
			{ props.types.map(type =>
				<TypeItem key={ type.name } type={ type } />
			) }
		</ul>
	)
}

TypesTable.propTypes = {
	types: PropTypes.array.isRequired
}

export default TypesTable;