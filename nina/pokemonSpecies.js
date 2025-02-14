const { Fire, Water, Grass, Normal} = require("./pokemonTypes")


// const charmander = new Fire("Charmander", "fire",)
//  charmander.this.move("ember")

//  const squirtle = new Water("Squirtle", "water")
//  squirtle.this.move("water gun")

//  const bulbasaur = new Grass("Bulbasaur", "vine whip")
//  bulbasaur.this.move("vine whip")

//  const rattata = new Normal("Rattata", "headbutt")
//  rattata.this.move("null")

// module.exports = { charmander, squirtle, bulbasaur,rattata }

class Charmander extends Fire {
    constructor(name, type, move) {
        super(name,type)
        this.move = "ember"

    }
    
}
class Squirtle extends Water {
    constructor(name, type, move) {
        super(name, type)
        this.move = "water gun"

    }
    
}

class Bulbasaur extends Grass {
    constructor(name, type, move) {
        super(name,type)
        this.move = "vine whip"

    }
    
}

class Rattata extends Normal {
    constructor(name, type) {
        super(name, type)
        

    }
    
}

module.exports = {Charmander, Squirtle, Bulbasaur, Rattata}