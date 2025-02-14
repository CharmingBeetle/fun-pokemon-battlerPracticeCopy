const { Pokemon } = require("../index");
const { 
  Fire, 
  Water, 
  Grass,
  Normal
} = require("../pokemonTypes")

describe('pokemon', () => {
  test('Check that intance of Pokemon returned is an object', () => {
    const pokemon = new Pokemon("Eevee", 55, 18);
    expect(typeof pokemon).toEqual('object');
  });
});
describe('Use Move', () => {
  test('Check attack damage is registered', () => {
    //Assign
    const pokemon = new Pokemon("Eevee", 55, 18);
    const expected = 18
  
    //Act
    const result = pokemon.useMove("Eevee")
  
    //Assert
    expect(result).toBe(expected);
  });

  test('Check that message is printed when pokemon attacks.', () => {
    //Assign
    const pokemon = new Pokemon("Eevee", 55, 18);
    // const expected = "Eevee used Eevee's move!"
    const consoleSpy = jest.spyOn(console, "log")
    //Act
    pokemon.useMove("Eevee")
    
    //Assert
    expect(consoleSpy.mock.calls.length).toBe(1);
  });
});
describe('hasFainted', () => {
  test('Returns TRUE if pokemon has 0 hitPoints', () => {
    //Assign
    const pokemon = new Pokemon("Eevee", 0);
    //Act
    const result = pokemon.hasFainted("Eevee")
    //Assert
    expect(result).toBe(true);
  });
  test('Returns FALSE if pokemon has more than 0 hitPoints', () => {
    //Assign
    const pokemon = new Pokemon("Eevee", 10);
    //Act
    const result = pokemon.hasFainted("Eevee")
    //Assert
    expect(result).toBe(false);
  });
})

describe('Pokemon Types Instantiation', () => {
  test('Returns true if Fire type is instatiated from Fire class', () => {
    const newPokemon = new Fire();
    expect(newPokemon).toBeInstanceOf(Fire);// true
  });
  test('Returns true if Water type is instatiated from Water class', () => {
    const newPokemon = new Water();
    expect(newPokemon).toBeInstanceOf(Water);// true
  });
  it('Returns true if Grass type is instatiated from Grass class', () => {
    const newPokemon = new Grass();
    expect(newPokemon).toBeInstanceOf(Grass);// true
  });
  it('Returns true if Normal type is instatiated from Normal class', () => {
    const newPokemon = new Normal();
    expect(newPokemon).toBeInstanceOf(Normal);// true
  });
 
})