const { 
  Fire, 
  Water, 
  Grass,
  Normal,
  charmander, 
  squirtle, 
  bulbasaur,
  rattata,
  Bulbasaur,
  Charmander,
  Squirtle
} = require("../index")
const { Pokeball } = require("../index")

describe('Pokeball', () => {
    describe("Properties", () => {
    test("Pokeball is instantiated", () => {
       
        const myPokeball = new Pokeball()

        console.log(myPokeball)
        //Assert
        expect(typeof myPokeball).toEqual("object")
     
    })

  })
})

describe('Methods', () => {
    describe('Throw Method', () => {
    test("Should return message with name of Pokemon when Pokemon is captured", ()=> {
              //Assign
              const myPokeballStored = new Pokeball()
              console.log(myPokeballStored, "<<<What's inside?")
              const newPokemon = "Charmander"
              const expected = "You caught Charmander!"
              const consoleSpy = jest.spyOn(console, "log")
              //Act"
              const result= myPokeballStored.throw(newPokemon)
              console.log(result)
              //Assert
              expect(result).toBe(expected)
              expect(consoleSpy.mock.calls[0].length).toBe(1)
        })
    })
    test("Should return message when ball is NOT EMPTY", ()=> { 
      //Assign
      const myPokeball = new Pokeball()
      const consoleSpy = jest.spyOn(console, "log")
      const expected = "GO Bulbasaur!!"
      //Act
      myPokeball.throw(Bulbasaur.name)
      const result = myPokeball.throw(Squirtle.name)
      //Assert
      expect(consoleSpy.mock.calls[0].length).toBe(1)
      expect(result).toBe(expected)
      

    })
    test("Should return GO message when Pokemon not passed in", ()=> {
          //Assign
        const myPokeballStored = new Pokeball()
        console.log(myPokeballStored, "<<<What's inside?")
        //Act"
        myPokeballStored.throw("Pikachu")
        const result= myPokeballStored.throw()
        console.log(result)
        //Assert
        expect(result).toEqual(`GO Pikachu!!`)
  })
    })

  describe('isEmpty Method', () => {
    test("Should return TRUE when Pokeball is EMPTY.", ()=> {
      //Assign
      const myNewPokeball = new Pokeball() 
      //Act
      const result = myNewPokeball.isEmpty()
      //Assert
      expect(result).toBe(true)
     })
    test("Should return FALSE when Pokeball is NOT empty.", ()=> {
      //Assign
      const Leafeon = new Grass("Leafeon")
      const myFullPokeball = new Pokeball() 
      //Act
      const newThrow = myFullPokeball.throw(Leafeon)
     
      const result = myFullPokeball.isEmpty()
      //Assert
      expect(result).toBe(false)
     })
    
    })
  describe('contains Method', () => {
    test("Should return 'Empty' when the Pokeball is empty", ()=> {
      const myEmptyPokeball = new Pokeball()
      const expected = "Empty..."
      const result = myEmptyPokeball.contains()
      expect(result).toBe(expected)
     })
    test("Should return name of Pokemon stored", ()=> { 
      const myFullPokeball = new Pokeball()

      //Act
      myFullPokeball.throw(Squirtle)
      const expected = Squirtle.name
      const result = myFullPokeball.contains()
      expect(result).toBe(expected)
    })
  })


//oopTests snippet