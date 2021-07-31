import galacticAge from '../src/js/galaxy-age';

describe ('galacticAge', () => {
    test('should create an age property in galacticAge constructor object', () => {
      let earthAge = new galacticAge(36);
      expect (earthAge).toEqual({"earthAge": 36});
    });
    test('should convert earthAge to Mercury years', () => {
      let earthAge = new galacticAge();
      let mercuryAge = earthAge.mercuryAge(36);
      expect (mercuryAge).toEqual(150);
    });
    test('should convert earthAge to Venus years', () => {
      let earthAge = new galacticAge();
      let venusAge = earthAge.venusAge(36);
      expect (venusAge).toEqual(58.06)
    });
    test('should convert earthAge to Mars years', () => {
      let earthAge = new galacticAge();
      let marsAge = earthAge.marsAge(36);
      expect (marsAge).toEqual(19.15);
    });
    test('should convert earthAge to Jupiter years', () => {
      let earthAge = new galacticAge();
      let jupiterAge = earthAge.jupiterAge(36);
      expect (jupiterAge).toEqual(3.04);
    });
    test ('should add life expectancy property into galacticAge constructor object', () => {
      let earthAge = new galacticAge(36, 77.79);
      expect (earthAge).toEqual({"earthAge": 36, "lifeExpectancy": 77.79}) 
    });
    test('should subtract Mercury years lived from earth years life expectancy to return Mercury years left', () => {
      let earthAge = new galacticAge();
      let mercuryAge = earthAge.mercuryAge(36);
      let lifeExpectancy = 77.79
      let mercuryYearsLeft = lifeExpectancy - mercuryAge;
      expect(mercuryYearsLeft).toEqual(-72.21) 
    })
});