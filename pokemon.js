// pokemon.js

var Pokemon = function(pokemon_json) {
	this.visible = false;
	this.id_no = pokemon_json.entry_number;
	this.poke_name = pokemon_json.pokemon_species.name;
<<<<<<< HEAD
	this.image = "img/" + this.id_no + ".png"
=======
	this.image = "img/" + this.id_no + ".png";
>>>>>>> 8c9f68d0c7f10f91c6a4fc5c429523ffc2728248
};