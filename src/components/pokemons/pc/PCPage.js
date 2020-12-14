import React from 'react';

import PCContext from '../../contexts/PCContext';
import PCItem from './PCItem';

const PCPage = () => {
	return (
		<div className="container-fluid">
			<ul className="cards mt-3">
				<PCContext.Consumer>
					{ ({ capturedPKM }) => (
						capturedPKM.map(pkm => 
							<PCItem key={ pkm } id={ pkm } />
						)
					) }
				</PCContext.Consumer>
			</ul>
		</div>
	)
}

export default PCPage;