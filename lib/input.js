'use strict'

function Note(argv) {
  this.action = argv[2];
  this.payload = argv[3];
}

function input(argv) {
  if(argv[2] === '--add' || argv[2] === '-a') {
    console.log('this is a valid note');
    return new Note;
  } else if (argv[2] !== '--add' || argv[2] !== '-a') {
    console.log('something is wrong with the input');
  } else {
    console.error('there was an error', error);
  }


}

module.exports = input;