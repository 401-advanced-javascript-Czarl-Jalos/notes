'use strict'

class Notes {

  constructor(object) {
    this.action = object.action;
    this.payload = object.payload;
  }

  execute() {
    if (action === 'add' || action == 'a') {
      return this.add();
    } 
  }

  add() {
    console.log(this.payload);
  }
}

module.exports = Notes;