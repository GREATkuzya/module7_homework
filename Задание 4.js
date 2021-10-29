function Electric(name, cost, isPlugged){
  this.cost = cost,
  this.name = name,
  this.warranty = "2 years",
  this.isPlugged = isPlugged,
  this.originCountry = "China",
  this.description = "Electical Equipment"
  }

Electric.prototype.getPower = function(power) { 
  let totalPower = power*24
  if (this.isPlugged === true) { 
    console.log(`It consumes ${totalPower} Watt in a Day`)} else {
      console.log(`Sorry, ${this.name} is not plugged in.`)}
}


function LowCostElectric(name, cost, isPlugged){
  this.name = name,
  this.cost = cost,
  this.warranty = "1 year",
  this.isPlugged = isPlugged
 // this.price = function price(cost) {let sum= cost*0.9; console.log(sum)}
}

LowCostElectric.prototype = new Electric()

LowCostElectric.prototype.getPower = function(power, hour){
       let totalPower = hour*power
       if (this.isPlugged === true) { 
    console.log(`This item consumes ${totalPower} Watts in a ${hour} hour(s)`)} else {
      console.log(`Sorry, ${this.name} is not plugged in.`)}
}

// LowCostElectric.prototype.price = function () {console.log(this.cost*.9)} 
LowCostElectric.prototype.price = function () {return this.cost*.9} 

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
// fan.price()
console.log(fan.price())

