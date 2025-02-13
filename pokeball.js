const {
  Pokemon,
  Fire,
  Water,
  Normal,
  Grass,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../fun-pokemon-battler/index");

//const Pokeball = [];
// if (Pokeball.length === 0) {
//   Pokeball.push(Pokemon);
//   //   return Pokeball
// }

class Pokeball {
  constructor() {
    this.CurrentPokemon = "empty";
  }

  throwPockeball(Pokemon = undefined) {
    if (this.CurrentPokemon === "empty") {
      this.CurrentPokemon = Pokemon;
      console.log(`you caught ${Pokemon.name} name`);
    }
    if (Pokemon === undefined){
    return this.CurrentPokemon
  }
}

module.exports = { Pokeball };
