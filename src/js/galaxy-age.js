export default class galacticAge {
  constructor (earthAge) {
  this.earthAge = earthAge;
  };
  mercuryAge(earthAge) {
    let mercuryAge = earthAge / 0.24;
    let mercuryAgeRounded = Number.parseFloat(mercuryAge).toPrecision(4)
    return parseFloat(mercuryAgeRounded);
  };
  venusAge(earthAge) {
    let venusAge = earthAge / 0.62;
    let venusAgeRounded = Number.parseFloat(venusAge).toPrecision(4);
    return parseFloat(venusAgeRounded);
  };
  marsAge(earthAge) {
    let marsAge = earthAge / 1.88;
    let marsAgeRounded = Number.parseFloat(marsAge).toPrecision(4);
    return parseFloat(marsAgeRounded);
  };

}