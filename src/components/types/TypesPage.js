import React, { Component } from 'react';

import DataHandler from '../../DataHandler';
import TypesTable from './TypesTable';

export default class TypesPage extends Component {

	state = {
		types: []
	}

	componentDidMount() {
		DataHandler.pokemonTypes(data => this.setState({ types: data.results }));
	}

	render() {
		return (
			<div className="container-fluid">
				<TypesTable types={ this.state.types } />
			</div>
		)
	}
}
