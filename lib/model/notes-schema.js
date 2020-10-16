'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewNotes = new Schema({
  // method: { type: String, required: true, enum: ['GET,']},
  text: { type: String, required: true },
  category: { type: String, required: true }
});
console.log
//Mongoose lifecycle Methods

NewNotes.pre('save',function () {
//saved items
this.text = this.text; 
})

const NoteModel = mongoose.model('Notes', NewNotes);
module.exports = NoteModel;