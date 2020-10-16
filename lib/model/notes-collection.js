'use strict'

const NoteModel = require('./notes-schema.js');
const mongoose = require('mongoose');


class NotesCollection {
  constructor() {
    this.model = NoteModel;
  }

  create(request) {
    console.log('im here');
    let newRequest = new NoteModel(request);
    newRequest.save()
      .then(note => {
        console.log(note, 'is saved in mongo database');
      });
  }

  get() {
    NoteModel.find({})
    .then(data => {
      console.log(data);
    });
  }

  delete(id) {
    NoteModel.findByIdAndRemove(id)
    .then(data => {
      console.log(`deleted Note ${id}`);
    })
  }

}

module.exports = NotesCollection;