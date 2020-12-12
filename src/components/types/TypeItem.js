import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeColor from './TypeColor';

export default class TypeItem extends Component {
	render() {
		return (
			<li className="cards-item">
				<div className="card text-center mr-3" style={{ backgroundColor: TypeColor[this.props.type.name], color: "white" }}>
					<div className="card-body">
						<p className="card-title text-capitalize font-weight-bold">
							{ this.props.type.name }
						</p>
					</div>
				</div>
			</li>
		)
	}
}

TypeItem.propTypes = {
	type: PropTypes.object.isRequired
}