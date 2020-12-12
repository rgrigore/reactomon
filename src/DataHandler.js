const axios = require('axios').default;

let prevPkmPage = null;
let currPkmPage = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";
let nextPkmPage = null;

const detailedPokemon = "https://pokeapi.co/api/v2/pokemon/";

const typesPage = "https://pokeapi.co/api/v2/type";

export let DataHandler = {
	_get: function(url, callback) {
		axios.get(url)
			.then(response => callback(response.data))
			.catch(error => console.log(error));
	},
	initPokemons: function(callback) {
		this._get(currPkmPage, data => {
			prevPkmPage = data.previous;
			nextPkmPage = data.next;
			callback(data);
		});
	},
	nextPokemons: function(callback) {
		this._get(nextPkmPage, data => {
			prevPkmPage = currPkmPage;
			currPkmPage = nextPkmPage;
			nextPkmPage = data.next;
			callback(data);
		});
	},
	previousPokemons: function(callback) {
		this._get(prevPkmPage, data => {
			nextPkmPage = currPkmPage;
			currPkmPage = prevPkmPage;
			prevPkmPage = data.previous;
			callback(data);
		});
	},
	pokemonById: function(id, callback) {
		this._get(detailedPokemon + id, callback);
	},
	pokemonTypes: function(callback) {
		this._get(typesPage, callback);
	}
}

export default DataHandler;