const { Pokemon } = require("./pokemon")
const { Pokeball } = require("./pokeball")
const { Trainer } = require("./trainer")
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
    Rattata,
    charmander, 
    squirtle, 
    bulbasaur,
    rattata }
 = require("./pokemonSpecies")

module.exports = {
    Pokemon,
    Charmander, 
    Squirtle, 
    Bulbasaur, 
    Rattata,
    charmander, 
    squirtle, 
    bulbasaur,
    rattata,
    Fire, 
    Water, 
    Grass,
    Normal,
    Pokeball, 
    Trainer
}

// const charmander = new Charmander("Charmander", "Fire", "ember")
// console.log(charmander, "<<<< whats this")
