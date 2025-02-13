class Pokemon {
  constructor(name) {
    this.name = name;
    this.hitPoints = 100; //health
    this.attack_damage = 100; //energy expended
    this.move = "tackle";
  }

  take_damage(amtOfdamage) {
    this.hitPoints -= amtOfdamage;
  }

  useMove(usedEnergy) {
    this.attack_damage -= usedEnergy;
    console.log("PokemonX used PokemonX's move");
  }

  hasFainted() {
    if (this.hitPoints === 0) {
      return true;
    }
    return false;
  }
}

class Fire extends Pokemon {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  isEffectiveAgainst(Pokemon2) {
    if (Pokemon2.type === "grass") {
      return true;
    }
    if (Pokemon2.type === "water") {
      return false;
    }
  }
  isWeakTo(Pokemon2) {
    if (Pokemon2.type === "water") {
      return true;
    }
    if (Pokemon2.type === "grass") {
      return false;
    }
  }
}

class Water extends Pokemon {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  isEffectiveAgainst(Pokemon2) {
    if (Pokemon2.type === "fire") {
      return true;
    }
    if (Pokemon2.type === "grass") {
      return false;
    }
  }

  isWeakTo(Pokemon2) {
    if (Pokemon2.type === "grass") {
      return true;
    }
    if (Pokemon2.type === "fire") {
      return false;
    }
  }
}

class Grass extends Pokemon {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  isEffectiveAgainst(Pokemon2) {
    if (Pokemon2.type === "water") {
      return true;
    }
    if (Pokemon2.type === "fire") {
      return false;
    }
  }
  isWeakTo(Pokemon2) {
    if (Pokemon2.type === "fire") {
      return true;
    }
    if (Pokemon2.type === "water") {
      return false;
    }
  }
}

class Normal extends Pokemon {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  isEffectiveAgainst(Pokemon2) {
    return null; /////check later
  }

  isWeakTo(Pokemon2) {
    return null; /////check later
  }
}
// const Pikachu = new Pokemon("Pikachu");

// const Pokemon2 = new Grass("Leafeon", "grass");
// const Pokemon1 = new Fire("Charmander", "fire");
// console.log(Pokemon1);
// console.log(Pokemon2);
// Pokemon1.isEffectiveAgainst(Pokemon2);
module.exports = { Pokemon, Fire, Water, Normal, Grass };
// module.exports = Water;
