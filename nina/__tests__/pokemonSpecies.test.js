const {
    Charmander, 
    Squirtle, 
    Bulbasaur, 
    Rattata
} = require("../index")
const { 
    Fire, 
    Water, 
    Grass,
    Normal
  } = require("../index")

describe('Pokemon Species Tests', () => {
    //   const PokemonFire = new Pokemon("Flareon", "fire")
    //   const PokemonWater = new Pokemon("Vaporeon", "water")
    //   const PokemonGrass = new Pokemon("Leafeon", "grass")
    //   const PokemonNormal = new Pokemon("Eevee", "None")
      
      describe('Species Instantiations', () => {
        test('Returns true if Charmander type is instatiated from Fire class', () => {
            const charmander = new Fire();
            // Flareon	Fire	65	Fire blast	20	Grass	Water	Fla... Flareon!
            expect(charmander).toBeInstanceOf(Fire);// true
          });
          test('Returns true if Squirtle type is instatiated from Water class', () => {
            const squirtle = new Water();
            expect(squirtle).toBeInstanceOf(Water);// true
          });
          it('Returns true if Bulbasuar type is instatiated from Grass class', () => {
            const bulbasaur = new Grass();
            expect(bulbasaur).toBeInstanceOf(Grass);// true
          });
          it('Returns true if Rattata type is instatiated from Normal class', () => {
            const rattata = new Normal();
            expect(rattata).toBeInstanceOf(Normal);// true
          });
        })

        describe('Move Function Tests', () => {
            test('Returns charmander move', () => {
                const charmander = new Charmander();
                const result = charmander.move
                expect(result).toBe("ember");
              });
              test('Returns squirtle move', () => {
                const squirtle = new Squirtle();
                const result = squirtle.move
                expect(result).toBe("water gun");
              });
              test('Returns bulbasaur move', () => {
                const bulbasaur = new Bulbasaur();
                const result = bulbasaur.move
                expect(result).toBe("vine whip");
              });
              test('Returns rattata move', () => {
                const rattata = new Rattata();
                const result = rattata.move
                expect(result).toBe("headbutt");
              });
            })
    })

//     const charmander = new Charmander("Charmander", "Fire")
//     // charmander.name
//     // charmander.hitPoints
//     // charmander.attackDamage
//     // charmander.move
//     // charmander.type
// console.log(charmander)  
// console.log(charmander.name,charmander.hitPoints,charmander.attackDamage,charmander.move,charmander.type) 
// console.log(Charmander)