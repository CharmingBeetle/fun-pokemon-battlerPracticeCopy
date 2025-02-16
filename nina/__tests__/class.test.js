const { 
    Fire, 
    Water, 
    Grass,
    Normal,
    Charmander,
    Bulbasaur
  }
 = require("../pokemonTypes")

describe('Is Effective Against', () => {
//   const PokemonFire = new Pokemon("Flareon", "fire")
//   const PokemonWater = new Pokemon("Vaporeon", "water")
//   const PokemonGrass = new Pokemon("Leafeon", "grass")
//   const PokemonNormal = new Pokemon("Eevee", "None")
  
  const charmander = new Fire("Charmander", "fire",)
  const squirtle = new Water("Squirtle", "water")
  const bulbasaur = new Grass("Bulbasaur", "grass")
//   const rattata = new Normal("Rattata", "headbutt")


  describe('Pokemon Fire', () => {
    test('Returns TRUE if the Pokemon Fire is effective against Pokemon Grass', () => {
      const result = charmander.isEffectiveAgainst(bulbasaur)
      expect(result).toBe(true);
    });
     test('Returns FALSE if the Pokemon Fire is effective against Pokemon Water', () => {
      const result = charmander.isEffectiveAgainst(squirtle)
      expect(result).toBe(false);
    });
   });
  describe('Pokemon Water', () => {
      test('Returns TRUE if the Pokemon Water is effective against Pokemon Fire', () => {
      const result = squirtle.isEffectiveAgainst(charmander)
      expect(result).toBe(true);
    });
      test('Returns FALSE if the Pokemon Water is effective against Pokemon Grass', () => {
      const result = squirtle.isEffectiveAgainst(bulbasaur)
      expect(result).toBe(false);
    });
  });
  describe('Pokemon Grass', () => {
      test('Returns TRUE if the Pokemon Grass is effective against Pokemon Water', () => {
      const result = bulbasaur.isEffectiveAgainst(squirtle)
      expect(result).toBe(true);
    });
      test('Returns FALSE if the Pokemon Grass is effective against Pokemon Water', () => {
      const result = squirtle.isEffectiveAgainst(bulbasaur)
      expect(result).toBe(false);
    });

  });
 });

describe('Is Weak Against', () => {
  // const PokemonFire = new Pokemon("Flareon", "fire")
  // const PokemonWater = new Pokemon("Vaporeon", "water")
  // const PokemonGrass = new Pokemon("Leafeon", "grass")
  // const PokemonNormal = new Pokemon("Eevee", "None")

  const charmander = new Fire("Charmander", "fire",)
  const squirtle = new Water("Squirtle", "water")
  const bulbasaur = new Grass("Bulbasaur", "grass")
//   const rattata = new Normal("Rattata", "headbutt")
  

  describe('Pokemon Fire', () => {
    test('Returns TRUE if the Pokemon Fire is weak against Pokemon Water', () => {
      const result = charmander.isWeakTo(squirtle)
      expect(result).toBe(true);
    });
     test('Returns FALSE if the Pokemon Fire is weak against Pokemon Grass', () => {
      const result = charmander.isWeakTo(bulbasaur)
      expect(result).toBe(false);
    });
   });
  describe('Pokemon Water', () => {
      test('Returns TRUE if the Pokemon Water is weak against Pokemon Grass', () => {
      const result = squirtle.isWeakTo(bulbasaur)
      expect(result).toBe(true);
    });
      test('Returns FALSE if the Pokemon Water is weak against Pokemon Fire', () => {
      const result = squirtle.isWeakTo(squirtle)
      expect(result).toBe(false);
    });
  });
  describe('Pokemon Grass', () => {
      test('Returns TRUE if the Pokemon Grass is weak against Pokemon Fire', () => {
      const result = bulbasaur.isWeakTo(charmander)
      expect(result).toBe(true);
    });
      test('Returns FALSE if the Pokemon Grass is weak against Pokemon Water', () => {
      const result = squirtle.isWeakTo(squirtle)
      expect(result).toBe(false);
    });

  });
 });
