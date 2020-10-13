'use strict'

function Note(obj) {
  this.action = obj.action;
  this.payload = obj.payload;
}

Note.prototype.execute = function() {
  if(this.action === '--add' || this.action === '-a') {
    this.add();
  }
}

Note.prototype.add = function() {
  let newNote = {id: 1, text: this.payload};
  console.log(newNote.text);
}


module.exports = Note;
