import galacticAge from '../src/js/galaxy-age';

describe ('galacticAge', () => {
    test('should create an age object', () => {
      const newAge = new galacticAge();
      expect (newAge).toEqual(new galacticAge);
    });
})