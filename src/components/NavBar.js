import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import PokemonsPage from './pokemons/PokemonsPage';
import TypesPage from './types/TypesPage';
import PCPage from "./pokemons/pc/PCPage";
import DetailedPage from './pokemons/detailed/DetailedPage';

const NavBar = () => {
	return (
		<BrowserRouter>
			<nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
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
						<li className="nav-item">
							<Link className="nav-link" to="/pc">PC</Link>
						</li>
					</ul>
				</div>
			</nav>

			<div className="mt-5 pt-3">
				<Switch>
					<Route path="/pokemon/:id" component={ DetailedPage } />
					<Route path="/pokemons" component={ PokemonsPage } />
					<Route path="/types" component={ TypesPage } />
					<Route path="/pc" component={ PCPage } />
					<Route path="/" component={ HomePage } />
				</Switch>
			</div>
			
		</BrowserRouter>
	)
}

export default NavBar;