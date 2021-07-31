export default class galacticAge {
  constructor (earthAge) {
  this.earthAge = earthAge;
  };
  mercuryAge(earthAge) {
    let mercuryAge = earthAge * 0.24;
    return mercuryAge;
  };
  venusAge(earthAge) {
    let venusAge = earthAge * 0.62;
    return venusAge;
  };
}