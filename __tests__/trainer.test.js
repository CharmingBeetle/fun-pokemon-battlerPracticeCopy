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
    Trainer
  } = require("../index")

  describe("Trainer: catch", () => {
    test.only ("If belt is not full, put catched pokemon inside of belt", () => {
      const trainer = new Trainer(); //Assert
      trainer.catch(Charmander)

      expect(trainer.belt.length).toBe(1);
    });
});
    // test("If pokeball is not empty return false", () => {
    //   const result = new Pokeball(); //Assert
    //   result.throwPockeball(Charmander);
    //   let check = result.isEmpty();
    //   expect(check).toBe(false);
    // });
