const {
  Pokeball,
  Charmander,
  Squirtle,
  Fire,
  Water,
  Normal,
  Grass,
  Bulbasaur,
  Rattata,
} = require("../index.js");

describe("Pokeball", () => {
  const Charmander = new Fire("Charmander");
  const Squirtle = new Water("Squirtle");
  const Bulbasaur = new Grass("Bulbasaur");
  const Rattata = new Normal("Rattata");
  describe("Pokeball: throwPockeball", () => {
    test("If pokeball is empty then a pokemon should be placed inside it", () => {
      const result = new Pokeball(); //Assert
      result.throwPockeball(Charmander);
      expect(result.CurrentPokemon).toEqual(Charmander);
    });
    test("If pokeball is empty then a pokemon should be placed inside it", () => {
      const consolSpy = jest.spyOn(console, "log");
      const result = new Pokeball(); //Assert
      result.throwPockeball(Charmander);
      expect(consolSpy).toHaveBeenCalledWith("you caught Charmander name");
    });
  });
  // describe("Water", () => {
  //   test("Returns water gun when WaterPokemon does an action", () => {
  //     const result = Squirtle.move; //Assert
  //     expect(result).toBe("water gun");
  //   });
  // });
});
