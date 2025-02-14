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

    test("If pokeball is empty and then no pokeomon was passed returns current pokemon as  undefined", () => {
      const result = new Pokeball(); //Assert
      result.throwPockeball();
      expect(result.CurrentPokemon).toEqual(undefined);
    });
    test("If pokeball is not empty and then no pokeomon was passed return generic message with name of current pokemon", () => {
      const consolSpy = jest.spyOn(console, "log");
      const result = new Pokeball(); //Assert
      result.throwPockeball(Charmander); //////why message  2 times ??
      result.throwPockeball();
      expect(consolSpy.mock.calls[consolSpy.mock.calls.length - 1][0]).toBe(
        "GO Charmander name!!"
      );
    });

    describe("Pokeball: isEmpty", () => {
      test("If pokeball is empty return true", () => {
        const result = new Pokeball(); //Assert
        let check = result.isEmpty();
        expect(check).toEqual(true);
      });
      test("If pokeball is not empty return false", () => {
        const result = new Pokeball(); //Assert
        result.throwPockeball(Charmander);
        let check = result.isEmpty();
        expect(check).toBe(false);
      });
    });

    describe("Pokeball: Contains", () => {
      test("If pokeball is not empty return the name of the pokemon", () => {
        const result = new Pokeball(); //Assert
        result.throwPockeball(Charmander);
        let check = result.contains();

        expect(check).toEqual("Charmander");
      });
      test("If pokeball is empty return 'empty' ", () => {
        const result = new Pokeball(); //Assert
        result.throwPockeball();
        let check = result.contains();
        expect(check).toBe("empty");
      });
    });
  });
});
