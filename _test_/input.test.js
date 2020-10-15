'use strict'

const input = require('../lib/input.js')

describe('', () => {
  it('should return a new valid instance with action and payload', () => {
    let testArgs = { add: "feed dog" };

    let input = new Input(process.argv);

    expect(parsedInput).toEqual({ action: 'add', payload: 'feed dog'})
    expect(parsedInput.valid()).toEqual(true);
  });

  it('should return a false booleans when given bad inputs', () => {

    let testArgs = { wrong: 'bad action'};
    
    let parsedInput = new Input(testArgs);

    expect(parsedInput.valid()).toEqual(false);
  });
});