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
  marsAge(earthAge) {
    let marsAge = earthAge * 1.88;
    let marsAgeRounded = Number.parseFloat(marsAge).toPrecision(4);
    return parseFloat(marsAgeRounded);
  };
}