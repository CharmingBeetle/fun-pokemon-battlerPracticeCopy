const { Pokemon } = require("./pokemon")

const { 
    Fire, 
    Water, 
    Grass,
    Normal
  } = require("./pokemonTypes")

const {
    Charmander, 
    Squirtle, 
    Bulbasaur, 
    Rattata
} = require("./pokemonSpecies")

module.exports = {
    Pokemon,
    Charmander, 
    Squirtle, 
    Bulbasaur, 
    Rattata, 
    Fire, 
    Water, 
    Grass,
    Normal
}

// const charmander = new Charmander("Charmander", "Fire", "ember")
// console.log(charmander, "<<<< whats this")
