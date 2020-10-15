'use strict'

const mongoose = require('mongoose');
const schema = require('./model/newSchema.js')

const { Schema } = mongoose;

const NewNotes = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true }
});

const NoteModel = mongoose.model('Note', NewNotes);

module.exports = NoteModel;

class Notes {

  constructor(object) {
    this.action = object.action;
    this.text = object.payload;
    this.category = object.category;
    console.log('nandito ako');
  }

  execute(action) {
    if (action === '--add' || action === '-a') {
      console.log('im here');
      return this.add();
    } else if (action === '--list') {
      return this.list();
    } else if (action === '--delete') {
      return this.delete();
    }
  }

  add() {
    let newNote = new NoteModel({
      text: this.text,
      category: this.category,
    });

    newNote.save()
      .then(note => {
        console.log(note, 'is saved in mongo database');
      });
  }

  list() {
  // list all notes
  NoteModel.find({})
  .then(data => {
    console.log(data);
  })
  }

  delete(id) {
  NoteModel.findByIdAndDelete({id})
  .then(data => {
    console.log(`deleted Note ${id}`);
  })

  }
}

module.exports = Notes;