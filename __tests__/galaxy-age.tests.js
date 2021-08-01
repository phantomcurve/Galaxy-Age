import galacticAge from '../src/js/galaxy-age';

describe ('galacticAge', () => {
    test('should create an age property in galacticAge constructor object', () => {
      let earthAge = new galacticAge(36);
      expect (earthAge).toEqual({"earthAge": 36});
    });
    test('should convert earthAge to Mercury years', () => {
      let earthAge = new galacticAge(36);
      let mercuryAge = earthAge.mercuryAge();
      expect (mercuryAge).toEqual(150.0);
    });
    test('should convert earthAge to Venus years', () => {
      let earthAge = new galacticAge(36);
      let venusAge = earthAge.venusAge();
      expect (venusAge).toEqual(58.06)
    });
    test('should convert earthAge to Mars years', () => {
      let earthAge = new galacticAge(36);
      let marsAge = earthAge.marsAge();
      expect (marsAge).toEqual(19.15);
    });
    test('should convert earthAge to Jupiter years', () => {
      let earthAge = new galacticAge(36);
      let jupiterAge = earthAge.jupiterAge();
      expect (jupiterAge).toEqual(3.04);
    });
    test ('should add life expectancy property into galacticAge constructor object', () => {
      let earthAge = new galacticAge(36, 77.79);
      expect (earthAge).toEqual({"earthAge": 36, "lifeExpectancy": 77.79}) 
    });
    test('should subtract Mercury years lived from earth years life expectancy to return Mercury years left', () => {
      let earthAge = new galacticAge(36, 77.79);
      let mercuryYearsLeft = earthAge.mercuryYearsLeft();
      expect (mercuryYearsLeft).toEqual("You have outlived your life expectancy by 72.21 years!") 
    });
});