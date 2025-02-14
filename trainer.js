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
    Pokeball
  } = require("./index")

class Trainer {

    constructor() {
        this.belt = [], 
        this.emptyPokeballs = 6
    }

catch(Pokemon) {
    if(this.emptyPokeballs > 0) {
        let catchingPokemon = new Pokeball()
        catchingPokemon.throwPockeball(Pokemon)
        this.belt.push(catchingPokemon)
        this.emptyPokeballs--
    }
    else {
        console.log("Your belt is full!")
    }
}
}

module.exports = { Trainer }