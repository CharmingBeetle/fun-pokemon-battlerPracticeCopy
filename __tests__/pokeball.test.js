const {Pokeball, Charmander, Squirtle, Bulbasaur, Rattata} = require("../fun-pokemon-battler/index")


describe("Pokeball", () => {
    const Charmander = new Fire("Charmander")
    const Squirtle = new Water("Squirtle")
    const Bulbasaur = new Grass("Bulbasaur")
    const Rattata = new Normal("Rattata")
    describe("Pokeball Initiation", () => {
        test("If pokeball is empty then a pokemon should be placed inside it", () => {
          const result = Pokeball(Charmander)        //Assert
          expect(result).toEqual([Charmander]);
        });
  });
  describe("Water", () => {
    test("Returns water gun when WaterPokemon does an action", () => {
      
      const result = Squirtle.move         //Assert
      expect(result).toBe("water gun");
    });
});
})