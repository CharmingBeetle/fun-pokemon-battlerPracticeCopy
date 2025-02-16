const { Fire, Water, Grass, Normal} = require("./pokemonTypes")


//Each individual Pokemon has their own signature move which overrides the parent class Pokemon

class Charmander extends Fire {
    constructor(name, type) {
        super(name,type)
        this.move = "ember"
        this.hitPoints = 44
        this.attackDamage = 17
        

    }
    
}
class Squirtle extends Water {
    constructor(name, type) {
        super(name, type)
        this.move = "water gun"
        this.hitPoints = 44
        this.attackDamage = 16

    }
    
}

class Bulbasaur extends Grass {
    constructor(name, type) {
        super(name,type)
        this.move = "vine whip"
        this.hitPoints = 45
        this.attackDamage = 16

    }
    
}

class Rattata extends Normal {
    constructor(name, type) {
        super(name, type)
        this.move = "headbutt"
        this.hitPoints = 55
        this.attackDamage = 18

    }
    
}
const charmander = new Charmander("Charmander", "fire",)

 const squirtle = new Squirtle("Squirtle", "water")


 const bulbasaur = new Bulbasaur("Bulbasaur", "vine whip")
 
 const rattata = new Rattata("Rattata", "headbutt")


module.exports = { charmander, squirtle, bulbasaur,rattata }

module.exports = {Charmander, Squirtle, Bulbasaur, Rattata}