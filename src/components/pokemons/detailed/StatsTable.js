import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StatsItem from './StatsItem';

export default class StatsTable extends Component {
	render() {
		return (
			<div className="d-flex align-items-center h-100">
				<ul className="list-group list-group-flush w-100">
					{ this.props.stats.map(stat => 
						<StatsItem key={ stat.stat.name } stat={ stat } />
					) }
				</ul>
			</div>
		)
	}
}

StatsTable.propTypes = {
	stats: PropTypes.array.isRequired
}