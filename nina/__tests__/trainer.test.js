const {
    Pokemon,
    Charmander, 
    Squirtle, 
    Bulbasaur, 
    Rattata,
    charmander, 
    squirtle, 
    bulbasaur,
    rattata,
    Fire, 
    Water, 
    Grass,
    Normal,
    Pokeball,
    pokeball, 
    Trainer
} = require("../index")


describe.only('Trainer', () => {
    describe('Properties', () => {
        it('should check if new instance of Trainer is instantiated with properties', () => {
            // Arrange
            const expectedBelt = [new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball(), new Pokeball()]
            const newTrainer = new Trainer(expectedBelt);
            // Act
            
            const result = newTrainer.belt
            console.log(result)
            // Assert
            expect(typeof newTrainer).toEqual('object');
            expect(result).toEqual(expectedBelt)
        });
    });

    describe('Methods', () => {
        describe('catch', () => {
        it('Returns message and when throw method is invoked within function and returned a value', () => {
            // Arrange
            const newTrainer = new Trainer()
            const myPokeball = new Pokeball()
            const expected = "Bulbasaur was caught!"
            //Act
            const consoleSpy = jest.spyOn(console,"log")
            const result = newTrainer.catch(Bulbasaur)
            console.log(result, "<<<<<<< line 47<<<<<<<<")
            // Assert
            expect(consoleSpy).toHaveBeenCalledWith(expected)
            consoleSpy.clearAllMocks
          
        });

        it('Returns the NAME of the Pokemon caught', () => {
                  // Arrange
                  const newTrainer = new Trainer()
                  const expected = Squirtle.name
        
                  // Act
                  const result = newTrainer.catch(Squirtle)
                  console.log(result, "<<<<<line 61<<<<<<<<<")

                  // Assert
                  expect(result).toBe(expected);
        })
        it('Checks that belt is populated with Pokemons passed in', () => {
            const newTrainer = new Trainer()
            const charmander = {name:"Charmander", type:"Fire"}
            const expected  = [charmander, charmander,charmander,charmander,charmander,charmander,]

            //Act
            newTrainer.catch(charmander)
            newTrainer.catch(charmander)
            newTrainer.catch(charmander)
            newTrainer.catch(charmander)
            newTrainer.catch(charmander)
            newTrainer.catch(charmander)
            const result = newTrainer.belt.map(pokeball => pokeball.storedPokemon)
            console.log(result), "<<<<<< belt"
            //Assert
            expect(result).toEqual(expected)

        })



        it('Returns message if no empty pokeballs are left', () => {
            //Arrange
            const newTrainer = new Trainer()
            const expected = "No empty Pokeballs left!"
            //Act
            newTrainer.catch(Charmander)
            newTrainer.catch(Charmander)
            newTrainer.catch(Charmander)
            newTrainer.catch(Charmander)
            newTrainer.catch(Charmander)
            newTrainer.catch(Charmander)
            const actual = newTrainer.catch(Charmander)
            console.log(newTrainer.belt)
            //Assert
            expect(actual).toBe(expected)
        })
        it.todo('Something () => {')

        describe('getPokemon', () => {
        it.todo('Returns TRUE when Pokeball throw method is invoked, () => {')
        
        it.todo('Something () => {')
    });
});
})
})