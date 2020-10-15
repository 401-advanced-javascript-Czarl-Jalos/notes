'use strict';
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input(process.argv);

if (input.action) {
let obj =  new Notes(input);
obj.execute(input.action);
} else {
  throw new Error('invalid action');
}
mongoose.connect('mongodb://localhost:27017/Note', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('we are connected to mongo'));
