import galacticAge from '../src/js/galaxy-age';

describe ('galacticAge', () => {
    test('should create an age object', () => {
      const newAge = new galacticAge();
      expect (newAge).toEqual(new galacticAge);
    });

    test('should convert newAge to Mercury years', () => {
      let earthAge = 36
      let mercuryAge = earthAge * 0.24;
      expect (mercuryAge).toEqual(8.64);
    });
});

