//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeCharacter(name, power, movement, taunt){
  this.name = name,
  this.power = power,
  this.movement = movement,
  this.taunt = taunt

  this.throw = function(){
    console.log('yeet')
  }

}
let Jigga = new MakeCharacter('jigga', 'ice', 'walk', 'shutup')
