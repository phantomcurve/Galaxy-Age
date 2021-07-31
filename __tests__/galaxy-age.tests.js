import galacticAge from '../src/js/galaxy-age';

describe ('galacticAge', () => {
    test('should create an age object', () => {
      let earthAge = new galacticAge(36);
      expect (earthAge).toEqual({"earthAge": 36});
    });
    test('should convert earthAge to Mercury years', () => {
      let earthAge = new galacticAge();
      let mercuryAge = earthAge.mercuryAge(36);
      expect (mercuryAge).toEqual(8.64);
    });
});

