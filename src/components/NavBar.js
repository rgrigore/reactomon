import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import PokemonsPage from './pokemons/PokemonsPage';
import TypesPage from './types/TypesPage';

export default class NavBar extends Component {
	render() {
		return (
			<BrowserRouter>
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">Reactomon</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/pokemons">Pokemons</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/types">Types</Link>
							</li>
						</ul>
					</div>
				</nav>

				<Switch>
					<Route path="/pokemons">
						<PokemonsPage />
					</Route>
					<Route path="/types">
						<TypesPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}
