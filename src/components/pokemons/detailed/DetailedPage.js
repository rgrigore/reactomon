import React, { useState, useEffect } from 'react';

import DataHandler from '../../../DataHandler';
import PCContext from '../../contexts/PCContext';
import InfoTable from './InfoTable';
import StatsTable from './StatsTable';

import openPKB from '../../../resources/pokeball-open.png';
import closedPKB from '../../../resources/pokeball-closed.png';

const DetailedPage = props => {
	
	const [pokemon, setPokemon] = useState({
		abilities: [],
		base_experience: 0,
		forms: [],
		game_indices: [],
		height: 0,
		held_items: [],
		id: 0,
		is_default: true,
		location_area_encounters: "",
		moves: [],
		name: "",
		order: 0,
		species: {},
		sprites: {},
		stats: [],
		types: [],
		weight: 0,
	})

	useEffect(() => {
		DataHandler.pokemonById(props.match.params.id, data =>
			setPokemon(data)
		);
	}, [props.match.params.id]);

	// const { capturedPKM, toggleCaptured } = useContext(PCContext);

	return (
		<div className="container-lg w-75 mt-5 rounded-lg" style={{ background: "rgb(230, 255, 253)" }}>
			<div className="row">
				<div className="col-4"><img className="img-fluid" src={ pokemon.sprites.front_default } alt="..." width="100%" /></div>
				<div className="col-4">
					<h2 className="font-weight-bold my-3 text-capitalize text-center">{ pokemon.name }</h2>
					<InfoTable pokemon={ pokemon } />
				</div>
				<div className="col-4">
					<StatsTable stats={ pokemon.stats } />
				</div>

				<PCContext.Consumer>
					{ ({ capturedPKM, toggleCaptured }) => (
						<img 
							className="position-fixed mt-3 ml-3"
							src={ capturedPKM.includes(pokemon.id) ? closedPKB : openPKB }
							onClick={ toggleCaptured.bind(null, pokemon.id) }
							alt="closed" width="40"
						/>
					) }
				</PCContext.Consumer>

			</div>
		</div>
	)
}

export default DetailedPage;
