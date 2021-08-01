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
    test('should subtract Mercury age from earth life expectancy–if less than 0, return years lived beyond life expectancy', () => {
      let earthAge = new galacticAge(36, 77.79);
      let mercuryYearsLeft = earthAge.mercuryYearsLeft();
      expect (mercuryYearsLeft).toEqual("You have outlived your life expectancy by 72.21 years!") 
    });
    test ('should subtract Mercury age from earth life expectancy–if greater than 0, return years remaining before programmed death', () => {
      let earthAge = new galacticAge(10, 77.79);
      let mercuryYearsLeft = earthAge.mercuryYearsLeft();
      expect (mercuryYearsLeft).toEqual("You have 36.12 years left to live on this planet")
    });
    test('should subtract Venus age from earth life expectancy–if greater than 0, return years left to live before programmed death', () => {
      let earthAge = new galacticAge(36, 77.79);
      let venusAge = earthAge.venusAge();
      let venusYearsLeft = earthAge.lifeExpectancy - venusAge;
      expect (venusYearsLeft).toEqual(19.730000000000004)
    });
    test('should subtract Venus age from earth life expectancy–if less than 0, return years lived beyond life expectancy', () => {
      let earthAge = new galacticAge(50, 77.79);
      let venusAge = earthAge.venusAge();
      let venusYearsLeft = Math.abs(earthAge.lifeExpectancy - venusAge);
      expect (venusYearsLeft).toEqual(2.8599999999999994)
    });
});