const { Pokemon } = require("./pokemon")


class Fire extends Pokemon {
  constructor(name, type){
    super(name)
    this.type = type
  }
  isEffectiveAgainst(Pokemon) {
    return Pokemon.type === "grass"? true: false
  }

  isWeakTo(Pokemon) {
    return Pokemon.type === "water" ? true: false
  }
}

class Water extends Pokemon {
  constructor(name, type){
    super(name)
    this.type = type

    //Methods
  }
  isEffectiveAgainst(Pokemon) {
    return Pokemon.type === "fire" ? true : false
  }

  isWeakTo(Pokemon) {
    return Pokemon.type === "grass" ? true : false
  }
}

class Grass extends Pokemon {
  constructor(name, type){
    super(name)
    this.type = type

    //Methods
  }
  isEffectiveAgainst(Pokemon) {
    return Pokemon.type === "water" ? true : false
  }

  isWeakTo(Pokemon) {
    return Pokemon.type === "fire" ? true : false
  }
}

class Normal extends Pokemon {
    constructor(name, type){
      super(name)
      this.type = type
    
      //Methods
    }
    isEffectiveAgainst(Pokemon) {
      return Pokemon.type === null
    }
  
    isWeakTo(Pokemon) {
      return Pokemon.type === null
    }
  }
///Pokemon subclass instances
//  const charmander = new Fire("Charmander", "fire",)
// //  charmander.this.move("ember")

//  const squirtle = new Water("Squirtle", "water")
// //  squirtle.this.move("water gun")

//  const bulbasaur = new Grass("Bulbasaur", "vine whip")
// //  bulbasaur.this.move("vine whip")

//  const rattata = new Normal("Rattata", "headbutt")
// //  rattata.this.move("")




module.exports = { 
  Fire, 
  Water, 
  Grass,
  Normal
}
//   charmander, 
//   squirtle, 
//   bulbasaur,
//   rattata
