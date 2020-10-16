'use strict'

const mongoose = require('mongoose');
const schema = require('./model/notes-schema.js');
const NotesCollection = require('./model/notes-collection.js');
const Interface = new NotesCollection;

// const { Schema } = mongoose;

// const NewNotes = new Schema({
//   text: { type: String, required: true },
//   category: { type: String, required: true }
// });

// const NoteModel = mongoose.model('Note', NewNotes);


// module.exports = NoteModel;

class Notes {

  constructor(object) {
    this.action = object.action;
    this.text = object.payload;
    this.category = object.category;
  }

  execute(action) {
    if (action === '--add' || action === '-a') {
      return Interface.create(this);
    } else if (action === '--list') {
      return Interface.get();
    } else if (action === '--delete') {
      const id = this.text;
      return Interface.delete(id);
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
  NoteModel.findByIdAndDelete(id)
  .then(data => {
    console.log(`deleted Note ${id}`);
  })
  
  }
}

module.exports = Notes;