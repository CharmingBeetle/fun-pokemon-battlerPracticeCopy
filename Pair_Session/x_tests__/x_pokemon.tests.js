// // const { Fire, Water, Grass, Normal, Pokemon } = require("../x_index");

// xdescribe("Pokemon", () => {
//   test("Returns an object with the correct properties", () => {
//     // Assign
//     const expected = "object";
//     // Act
//     const Pikachu = new Pokemon("Pikachu");
//     // Assert
//     expect(typeof Pikachu).toBe(expected);
//   });
//   test("Returns name property of the object", () => {
//     // Assign
//     const expected = "Pikachu";
//     // Act
//     const Pikachu = new Pokemon("Pikachu");
//     // Assert
//     expect(Pikachu.name).toBe(expected);
//   });
//   describe("take_damage", () => {
//     test("Reduce the value of property hitpoints by the amount of damage", () => {
//       // Assign
//       const amtOfdamage = 5;

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       Pikachu.take_damage(amtOfdamage);
//       //Assert
//       expect(Pikachu.hitPoints).toBe(95);
//     });
//     // test.todo(' ')
//   });

//   describe("useMove", () => {
//     test("Reduce the value of property attackdamage by the usedEnergy", () => {
//       // Assign
//       const usedEnergy = 10;

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       Pikachu.useMove(usedEnergy);
//       //Assert
//       expect(Pikachu.attack_damage).toBe(90);
//     });

//     test("Check that message was shown after Pokemon1 has attacked other Pokemon2", () => {
//       // Assign
//       const usedEnergy = 10;

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       const spy = jest.spyOn(console, "log"); // called before function is invoked
//       Pikachu.useMove(usedEnergy);
//       //Assert

//       expect(spy.mock.calls.length).toBe(1); //returns array which shows how many times it was called
//     });

//     test("Check that specified message was shown after Pokemon1 has attacked other Pokemon2", () => {
//       // Assign
//       const usedEnergy = 10;

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       const spy = jest.spyOn(console, "log"); // called before function is invoked
//       Pikachu.useMove(usedEnergy);
//       //Assert

//       expect(spy).toHaveBeenCalledWith("PokemonX used PokemonX's move"); //returns array which shows how many times it was called
//     });
//   });
//   describe("hasFainted", () => {
//     test("Should return true if hitpoints property reaached 0", () => {
//       // Assign

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       Pikachu.take_damage(100);
//       const result = Pikachu.hasFainted();

//       //Assert
//       expect(result).toBe(true);
//     });

//     test("Should return false if hitpoints property has NOT reaached 0", () => {
//       // Assign

//       //Act
//       const Pikachu = new Pokemon("Pikachu");
//       Pikachu.take_damage(50);
//       const result = Pikachu.hasFainted();

//       //Assert
//       expect(result).toBe(false);
//     });
//   });
// });

// xdescribe("ClassesTypes: isEffectiveAgainst", () => {
//   describe("Water", () => {
//     test("returns True if given Pokemon2 of Fire Type", () => {
//       const Pokemon2 = new Fire("Charmander", "fire");
//       const Pokemon1 = new Water("Squirtle", "water");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(true);
//     });
//     test("returns false if given Pokemon2 of Grass Type", () => {
//       const Pokemon2 = new Grass("Bulbasaur", "grass");
//       const Pokemon1 = new Water("Squirtle", "water");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(false);
//     });
//   });
//  describe("Fire", () => {
//     test("returns True if given Pokemon2 of Grass Type", () => {
//       const Pokemon2 = new Grass("Leafeon", "grass");
//       const Pokemon1 = new Fire("Charmander", "fire");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(true);
//     });
//     test("returns false if given Pokemon2 of Grass Type", () => {
//       const Pokemon2 = new Water("Squirtle", "water");
//       const Pokemon1 = new Fire("Charmander", "fire");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(false);
//     });
//   });

//  describe("Grass", () => {
//     test("returns True if given Pokemon2 of Water Type", () => {
//       const Pokemon1 = new Grass("Leafeon", "grass");
//       const Pokemon2 = new Water("Vaporeon", "water");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(true);
//     });
//     test("returns false if given Pokemon2 of Grass Type", () => {
//       const Pokemon1 = new Grass("Leafeon", "grass");
//       const Pokemon2 = new Fire("Charmander", "fire");
//       const result = Pokemon1.isEffectiveAgainst(Pokemon2);
//       //Assert
//       expect(result).toBe(false);
//     });
//   });

//   describe("ClassesTypes: isWeakTo", () => {
//     describe("Water", () => {
//       test("returns True if given Pokemon2 of Grass Type", () => {
//         const Pokemon2 = new Grass("Charmander", "grass");
//         const Pokemon1 = new Water("Squirtle", "water");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(true);
//       });
//       test("returns False if given Pokemon2 of Fire Type", () => {
//         const Pokemon2 = new Fire("Charmander", "fire");
//         const Pokemon1 = new Water("Squirtle", "water");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(false);
//       });
//     });

//     describe("Grass", () => {
//       test("returns True if given Pokemon2 of Grass Type", () => {
//         const Pokemon2 = new Fire("Charmander", "fire");
//         const Pokemon1 = new Grass("Charmander", "grass");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(true);
//       });
//       test("returns false if given Pokemon2 of Water Type", () => {
//         const Pokemon1 = new Grass("Charmander", "grass");
//         const Pokemon2 = new Water("Squirtle", "water");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(false);
//       });
//     });

//     describe("Fire", () => {
//       test("returns True if given Pokemon2 of Water Type", () => {
//         const Pokemon2 = new Water("Squirtle", "water");
//         const Pokemon1 = new Fire("Charmander", "fire");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(true);
//       });
//       test("returns False if given Pokemon2 of Water Type", () => {
//         const Pokemon2 = new Grass("Charmander", "grass");
//         const Pokemon1 = new Fire("Charmander", "fire");
//         const result = Pokemon1.isWeakTo(Pokemon2);
//         //Assert
//         expect(result).toBe(false);
//       });
//     });

// describe("Move Function", () => {
//     const Charmander = new Fire("Charmander")
//     const Squirtle = new Water("Squirtle")
//     const Bulbasaur = new Grass("Bulbasaur")
//     const Rattata = new Normal("Rattata")
//     describe("Fire", () => {
//         test("Returns ember when FirePokemon does an action", () => {
          
//           const result = Charmander.move         //Assert
//           expect(result).toBe("ember");
//         });
//   });
//   describe("Water", () => {
//     test("Returns water gun when WaterPokemon does an action", () => {
      
//       const result = Squirtle.move         //Assert
//       expect(result).toBe("water gun");
//     });
// });
//   describe("Grass", () => {
//     test("Returns vine whip when GrassPokemon does an action", () => {
      
//       const result = Bulbasaur.move         //Assert
//       expect(result).toBe("vine whip");
//     });
// });

// })
// });
// })
