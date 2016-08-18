// pokemon.js

var Pokemon = function(pokemon_json) {
	this.visible = false;
	this.id_no = pokemon_json.entry_number;
	this.poke_name = pokemon_json.pokemon_species.name;
	this.image = "img/" + this.id_no + ".png";
};