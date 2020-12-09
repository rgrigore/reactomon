const axios = require('axios').default;

let prevPkmPage = null;
let currPkmPage = "https://pokeapi.co/api/v2/pokemon";
let nextPkmPage = null;

export let DataHandler = {
	_get: function(url, callback, dataCallback) {
		axios.get(url)
			.then(response => {
				callback(response.data);
				dataCallback(response.data);
			})
			.catch(error => console.log(error));
	},
	initPokemons: function(callback) {
		this._get(currPkmPage, callback, data => {
			prevPkmPage = data.previous;
			nextPkmPage = data.next;
		});
	},
	nextPokemons: function(callback) {
		this._get(nextPkmPage, callback, data => {
			prevPkmPage = data.previous;
			nextPkmPage = data.next;
		});
	},
	previousPokemons: function(callback) {
		this._get(prevPkmPage, callback, data => {
			prevPkmPage = data.previous;
			nextPkmPage = data.next;
		});
	}
}

export default DataHandler;