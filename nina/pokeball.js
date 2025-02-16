const { Pokemon } = require("./pokemon")
const {Charmander, Squirtle, Bulbasaur, Rattata} = require("./pokemonSpecies")
class Pokeball {
    constructor() {
        this.storedPokemon = null //Pokemon name/object  
    }

    //Methods
    throw(Pokemon) {
       //Check if Pokeball is empty
    if(this.isEmpty()) {
        if(Pokemon !== undefined) {
        
        //If empty >>>> Catch the Pokemon
        this.storedPokemon = Pokemon
        const message = `You caught ${Pokemon}!`
        console.log(message) 
        return message

      } else {
        console.log("Pokeball is empty!")
        return "Pokeball is empty!"
        }
            //If full >>> Release the Pokemon
    } else { 
            //if Pokeball is stored or none passed in
        if(this.storedPokemon !== null) {
        const releasedPokemon = this.storedPokemon //set stored Pokemon for release
        //Reset storage to NULL 
        this.storedPokemon = null
        console.log(`GO ${releasedPokemon}!!`) // Start battle!
        return `GO ${releasedPokemon}!!`
    } else {
        console.log("Pokeball is empty!")
        return "Pokeball is empty!"
        }
}
    }
    isEmpty() {
        return this.storedPokemon === null ? true : false
    }

    contains() {
        return this.storedPokemon ? this.storedPokemon.name: "Empty..."
    }
}


const pokeball = new Pokeball()
   

// else if (!Pokemon) return releasedPokemon

   



//Pokeballs are the containers for Pokemon. They are used in the game to catch Pokemon and to release the Pokemon for battle.

// Pokeball behaviours include:

// being able to store a Pokemon.
// throw it to catch a Pokemon.
// throw it to release it for battle.
// check which Pokemon is in the pokeball.


// Methods

// throw

// Takes a Pokemon object as an argument. If the pokeball is empty it will capture the passed Pokemon.
// If it isn't empty, the user should not be allowed to capture a pokemon with it!
// The throw method should also console log something like ("you caught pokemonX's name") when a Pokemon has been caught.
// Additionally, the method can be invoked with no argument.
// In this case the method should return the stored Pokemon. The throw method should console log something like ("GO pokemonX's name!!") in this scenario.
// If the ball is empty then the user should be informed accordingly.


// isEmpty

// Should return a boolean representing whether or not a Pokemon is stored inside it.

// contains

// Should return the name of the Pokemon that is stored or
// If the pokeball is empty is should return "empty ...".

module.exports = { Pokeball }