const Pokemon = require('../pokemon')

describe.('Pokemon', () => {
    test('Returns an object with the correct properties', () => {
        // Assign
         const expected = "object"
        // Act
        const Pikachu = new Pokemon("Pikachu")
        // Assert
        expect(typeof Pikachu).toBe(expected)
    });
    test('Returns name property of the object', () => {
        // Assign
         const expected = "Pikachu"
        // Act
        const Pikachu = new Pokemon("Pikachu")
        // Assert
        expect(Pikachu.name).toBe(expected)
    });
describe('take_damage', () => {
test('Reduce the value of property hitpoints by the amount of damage',() => {
// Assign 
const amtOfdamage = 5

//Act 
const Pikachu = new Pokemon("Pikachu")
Pikachu.take_damage(amtOfdamage)
//Assert
expect(Pikachu.hitPoints).toBe(95)
})
// test.todo(' ')
});

describe('useMove', () => {
    test('Reduce the value of property attackdamage by the usedEnergy',() => {
    // Assign 
    const usedEnergy = 10
    
    //Act 
    const Pikachu = new Pokemon("Pikachu")
    Pikachu.useMove(usedEnergy)
    //Assert
    expect(Pikachu.attack_damage).toBe(90)
    })
    

    test('Check that message was shown after Pokemon1 has attacked other Pokemon2',() => {
        // Assign 
        const usedEnergy = 10
        
        //Act 
        const Pikachu = new Pokemon("Pikachu")
        const spy = jest.spyOn(console, "log") // called before function is invoked
        Pikachu.useMove(usedEnergy)
        //Assert
        
        expect(spy.mock.calls.length).toBe(1) //returns array which shows how many times it was called
        })
    });
describe('hasFainted', () => {
        test('Should return true if hitpoints property reaached 0',() => {
        // Assign 

        //Act 
        const Pikachu = new Pokemon("Pikachu")
        Pikachu.take_damage(100)
        const result = Pikachu.hasFainted()
        
        //Assert
        expect(result).toBe(true)
        })

        test('Should return false if hitpoints property has NOT reaached 0',() => {
            // Assign 
    
            //Act 
            const Pikachu = new Pokemon("Pikachu")
            Pikachu.take_damage(50)
            const result = Pikachu.hasFainted()
            
            //Assert
            expect(result).toBe(false)
            })
})
})