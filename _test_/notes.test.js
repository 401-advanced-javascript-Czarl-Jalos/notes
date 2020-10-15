'use strict'

const Notes = require('../lib/notes.js');
const Notest = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe ('Testing the notes module', () => {
  it('console log does not get called with no command giver', () => {
    let testNote = new Notes();
    testNote.execute();
  });

  it('console log is called when a valit command is given', () => {

    let testNote = new Notes({ action: '--add', payload: 'test'});

    testNote.execute();

    expect(console.log).toHaveBeenCalled();
  });
});