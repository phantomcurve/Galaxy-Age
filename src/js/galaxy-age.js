export default class galacticAge {
  constructor (earthAge, lifeExpectancy) {
  this.earthAge = earthAge;
  this.lifeExpectancy = lifeExpectancy;
  };
  
  mercuryAge() {
    let mercuryAge = Number.parseFloat(this.earthAge / 0.24).toPrecision(4)
    return parseFloat(mercuryAge);
  };
  
  venusAge() {
    let venusAge = Number.parseFloat(this.earthAge / 0.62).toPrecision(4);
    return parseFloat(venusAge);
  };
  
  marsAge() {
    let marsAge = Number.parseFloat(this.earthAge / 1.88).toPrecision(4);
    return parseFloat(marsAge);
  };
  
  jupiterAge() {
    let jupiterAge = Number.parseFloat(this.earthAge / 11.86).toPrecision(3);
    return parseFloat(jupiterAge);
  };
  
  mercuryYearsLeft() {
    let mercuryYearsLeft = this.lifeExpectancy - this.mercuryAge();
    let result;
      if (mercuryYearsLeft <= 0) {
        result = "You have outlived your life expectancy by " + Math.abs(this.lifeExpectancy - this.mercuryAge()) + " years!";
      } else {
        result = "You have "  + Number.parseFloat(mercuryYearsLeft).toPrecision(4) + " years left to live on this planet";
      }
      return result;
  };

}