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
} = require("./index");

//const Pokeball = [];
// if (Pokeball.length === 0) {
//   Pokeball.push(Pokemon);
//   //   return Pokeball
// }

class Pokeball {
  constructor() {
    this.CurrentPokemon = undefined;
  }

  throwPockeball(Pokemon) {
    if (this.CurrentPokemon === undefined && Pokemon !== undefined) {
      this.CurrentPokemon = Pokemon;
      console.log(`you caught ${Pokemon.name} name`);
    } else if (Pokemon === undefined && this.CurrentPokemon !== undefined) {
      console.log(`GO ${this.CurrentPokemon.name} name!!`);
      return this.CurrentPokemon;
    } else if (Pokemon === undefined && this.CurrentPokemon === undefined) {
      return undefined;
    }else if(Pokemon !== undefined && this.CurrentPokemon !== undefined){
      return this.CurrentPokemon
    }
    
  }

  isEmpty() {
    if (this.CurrentPokemon === undefined) {
      return true;
    }
    return false;
  }
  contains() {
    if (this.CurrentPokemon !== undefined) {
      return this.CurrentPokemon.name;
    }
    return "empty";
  }
}
module.exports = { Pokeball };
