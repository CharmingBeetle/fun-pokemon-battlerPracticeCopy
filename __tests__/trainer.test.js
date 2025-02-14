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
  Pokeball,
} = require("../index");
const { Trainer2 } = require("../trainer2");

describe("Trainer: catch", () => {
  test.only("If belt is not full, put catched pokemon inside of belt", () => {
    const trainer = new Trainer2();
    trainer.catchPokemon(Charmander);

    expect(trainer.belt.length).toBe(1);
  });
});
// test("If pokeball is not empty return false", () => {
//   const result = new Pokeball(); //Assert
//   result.throwPockeball(Charmander);
//   let check = result.isEmpty();
//   expect(check).toBe(false);
// });
