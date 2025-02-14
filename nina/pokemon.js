class Pokemon {
    constructor(name, hitPoints, attackDamage) {
      this.name = name;
      this.hitPoints = hitPoints; //health status
      this.attackDamage = attackDamage; //amount of damage a Pokemon can inflict
      this.move = 'tackle';
    }
    //Methods
    takeDamage(num) {
      this.hitPoints -= num;
    }
    useMove() {
      console.log(`${this.name} used ${this.name}'s move`);
      return this.attackDamage
    }
  
    hasFainted() {
      if (this.hitPoints <= 0) {
        return true;
      }
      return false;
    }
  }
  
  
  module.exports =  { Pokemon };
  