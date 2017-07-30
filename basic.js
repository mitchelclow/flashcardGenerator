function MakeFighter(name, profession, gender, age, strength, healthPoints)
{
  this.naming = name;
  this.professing = profession;
  this.gendering = gender;
  this.ageing = age;
  this.strengthing = strength;
  this.healthing = healthPoints;
  this.printStats = function()
  {
    this.naming ? console.log(this.naming): console.log("Mickey");
    this.professing ? console.log(this.professing) : console.log("Mage");
    this.gendering ? console.log(this.gendering) : console.log("Male");
    this.ageing ? console.log(this.ageing) : console.log (14);
    this.strengthing ? console.log(this.strengthing) : console.log (10);
    this.healthing ? console.log(this.healthing) : console.log(65); 
  }
}

var mickey = new MakeFighter();
var donald = new MakeFighter ("Donald", "Wizard", "Male", 15, 16, 57);

mickey.printStats();
donald.printStats();