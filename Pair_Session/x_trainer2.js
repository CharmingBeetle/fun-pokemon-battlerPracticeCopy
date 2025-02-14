// const {
//   Pokemon,
//   Fire,
//   Water,
//   Normal,
//   Grass,
//   Charmander,
//   Squirtle,
//   Bulbasaur,
//   Rattata,
//   Pokeball,
// } = require("./index.js");
// class Trainer2 {
//   constructor() {
//     (this.belt = []), (this.emptyPokeballs = 6);
//   }

//   catchPokemon(Pokemon) {
//     if (this.emptyPokeballs > 0) {
//       const catchingPokemon = new Pokeball();
//       catchingPokemon.throwPockeball(Pokemon);
//       this.belt.push(catchingPokemon);
//       this.emptyPokeballs--;
//     } else {
//       console.log("Your belt is full!");
   
//     }
//   }
//     getPokemon(nameOfPokemon) {
//       for(let i = 0; i < this.belt.length; i++) {
//          const pokeball = this.belt[i]
//          const resultCheck = Object.values(pokeball)
//          console.log(resultCheck+ "We are checking it now")
//          }
//     }
  
//   }

// module.exports = { Trainer2 };
