'use strict'

class Input {

  constructor(args) {
    const commands = this.parseCommands(args);
    this.payload = commands.payload;
    this.action = commands.action;
  }

  parseCommands(inputCommands) {
    const result = {};

    const validCommands = ['add'];

    for (let command of validCommands) {
      if(Object.keys(inputCommands).includes(command)) {
        result.action= inputCommands[command];
        result.payload = inputCommands[command];
      }
    }
    return result;
  }

  valid() {
    if(this.action && this.payload) {
      return true;
    }

    return false;
  }
  

}

module.exports = Input;