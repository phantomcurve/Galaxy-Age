export default class galacticAge {
  constructor (earthAge) {
  this.earthAge = earthAge;
  };
  mercuryAge(earthAge) {
    let mercuryAge = earthAge * 0.24;
    return mercuryAge;
  };
}