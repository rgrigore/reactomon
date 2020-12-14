import React, { useState, useEffect } from 'react';

import DataHandler from '../../DataHandler';
import TypesTable from './TypesTable';

const TypesPage = () => {

	const [types, setTypes] = useState([]);

	useEffect(() => {
		DataHandler.pokemonTypes(data => setTypes(data.results));
	}, []);

	return (
		<div className="container-fluid">
			<TypesTable types={ types } />
		</div>
	)
}

export default TypesPage;