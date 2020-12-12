import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeItem from './TypeItem';

export default class TypesTable extends Component {
	render() {
		return (
			<ul className="cards mt-3">
				{ this.props.types.map(type =>
					<TypeItem key={ type.name } type={ type } />
				) }
			</ul>
		)
	}
}

TypesTable.propTypes = {
	types: PropTypes.array.isRequired
}