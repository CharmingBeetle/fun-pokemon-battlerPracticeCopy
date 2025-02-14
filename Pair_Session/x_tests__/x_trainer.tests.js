// // const {
// //   Pokemon,
// //   Fire,
// //   Water,
// //   Normal,
// //   Grass,
// //   Charmander,
// //   Squirtle,
// //   Bulbasaur,
// //   Rattata,
// //   Pokeball,
// // } = require("../index");
// // const { Trainer2 } = require("../trainer2");

// xdescribe("Trainer: catch", () => {
//   test("If belt is not full, put catched pokemon inside of belt", () => {
//     const trainer = new Trainer2();
//     trainer.catchPokemon(Charmander);

//     expect(trainer.belt.length).toBe(1);
//   });
//   test("If belt is full, return message", () => {
//     const trainer = new Trainer2();
//     consoleSpy = jest.spyOn(console,"log")
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     trainer.catchPokemon(Charmander);
//     expect(consoleSpy.mock.calls[consoleSpy.mock.calls.length-1][0]).toBe("Your belt is full!");
//   });
// });
// xdescribe("Trainer:getPokemon ", () => {
//     test("Returns pokeball with the name from the getPokeball search", () => {
//       const trainer = new Trainer2();

//       trainer.catchPokemon(Charmander);
//       trainer.catchPokemon(Bulbasaur);
//       trainer.catchPokemon(Squirtle);
//       const result = trainer.getPokemon("Bulbasaur")
  
//       expect(result).toEqual(Bulbasaur);
//     });
//     // test("If belt is full, return message", () => {
//     //   const trainer = new Trainer2();
//     //   consoleSpy = jest.spyOn(console,"log")
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   trainer.catchPokemon(Charmander);
//     //   expect(consoleSpy.mock.calls[consoleSpy.mock.calls.length-1][0]).toBe("Your belt is full!");
//     // });
//   });
