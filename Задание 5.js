class Electric {
 constructor (name, cost, isPlugged) {
  this.cost = cost;
  this.name = name;
  this.warranty = "2 years";
  this.isPlugged = isPlugged;
  this.originCountry = "China";
  this.description = "Electical Equipment";
  }
  getPower = function(power) { 
  let totalPower = power*24
  if (this.isPlugged === true) { 
    console.log(`It consumes ${totalPower} Watt in a Day`)} else {
      console.log(`Sorry, ${this.name} is not plugged in.`)}
}

}



class LowCostElectric extends Electric {
 constructor (name, cost, isPlugged){
  super(name, cost, isPlugged);
  this.name = name;
  this.cost = cost;
  this.warranty = "1 year";
  this.isPlugged = isPlugged;
 }
  

getPower = function(power, hour){
       let totalPower = hour*power
       if (this.isPlugged === true) { 
    console.log(`This item consumes ${totalPower} Watts in a ${hour} hour(s)`)} else {
      console.log(`Sorry, ${this.name} is not plugged in.`)}
}
price = function () {return this.cost*.9} 
}




const fan = new LowCostElectric("fan", 11, true);
const lamp = new LowCostElectric("lamp", 15, true);
const computer = new Electric("computer", 500, true)
const iron = new Electric("iron", "70$", false)
computer.getPower(50)
lamp.getPower(47, 4)
iron.getPower(1500)
console.log(fan.cost)
console.log(lamp.isPlugged)
console.log(lamp.originCountry)
console.log(fan.description)
console.log(iron)
console.log(fan.price())
