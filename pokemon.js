class Pokemon {
    constructor(name) {
        this.name = name
        this.hitPoints = 100 //health
        this.attack_damage = 100 //energy expended 
        this.move = "tackle"
        
    }

    take_damage(amtOfdamage) {
        this.hitPoints -= amtOfdamage
    }

    useMove(usedEnergy) {
        this.attack_damage -= usedEnergy
        console.log("PokemonX used PokemonX's move")
        
    }

    hasFainted() {
        if(this.hitPoints === 0) {
            return true
        }
        return false
    }
}
const Pikachu = new Pokemon("Pikachu")


module.exports = Pokemon