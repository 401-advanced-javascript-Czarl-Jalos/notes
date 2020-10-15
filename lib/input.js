'use strict'

class Input {

  constructor(args) {
    // const commands = this.parseCommands(args);
    this.action = args[2];
    this.payload = args[3];
    this.category = args[4];
  }


  valid(arg) {
    if(arg === '--add' || arg === '-a') {
      return arg;
    } else if (arg === '--list') {
      return arg;
    } else {
    return null;
    }
  }

}

module.exports = Input;