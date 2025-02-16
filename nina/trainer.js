// const {
//     Pokemon,
//     Charmander, 
//     Squirtle, 
//     Bulbasaur, 
//     Rattata,
//     charmander, 
//     squirtle, 
//     bulbasaur,
//     rattata,
//     Fire, 
//     Water, 
//     Grass,
//     Normal,
//     Pokeball,
//     pokeball
// } = require("./index")
const {Charmander, Squirtle, Bulbasaur, Rattata} = require("./pokemonSpecies")
const { Pokeball } = require("./pokeball")
class Trainer {
    constructor(){
        this.belt = [new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball()];
    }

    //Methods
    catch(Pokemon) {
        for (const pokeball of this.belt) {
            if(pokeball.isEmpty()) {

                pokeball.throw(Pokemon)
                console.log(`${Pokemon.name} was caught!`)
                return Pokemon.name
            }
           
        }
        for(const pokeball of this.belt) {
        if(!pokeball.isEmpty()) {
        console.log(`No empty Pokeballs left!`)
        return `No empty Pokeballs left!`
        }
    }
}
getPokemon(Pokemon) {
}
}



const trainer = new Trainer()

console.log(trainer, trainer.catch(Bulbasaur))

// A Trainer should have a belt property which can store up to 6 Pokeballs. The datatype of the belt is up to you to decide.
// Methods

// catch

// Takes a Pokemon as an argument.
// It should use one of its empty Pokeball's throw method to catch the Pokemon.
// Should do something if you don't have any empty Pokeballs, what and how is up to you.


// getPokemon //for loop in the belt

// Takes the name of a Pokemon.
// Will search for the the Pokemon with that name in the belt.
// Use the Pokeball's throw to return that specific Pokemon.










module.exports = { Trainer }