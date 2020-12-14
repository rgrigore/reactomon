import React from 'react';
import PropTypes from 'prop-types';

import StatsItem from './StatsItem';

const StatsTable = props => {
	return (
		<div className="d-flex align-items-center h-100">
			<ul className="list-group list-group-flush w-100">
				{ props.stats.map(stat => 
					<StatsItem key={ stat.stat.name } stat={ stat } />
				) }
			</ul>
		</div>
	)
}

StatsTable.propTypes = {
	stats: PropTypes.array.isRequired
}

export default StatsTable;