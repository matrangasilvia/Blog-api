'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var aggiungiArticolo = new Schema({
  title: {
    type: String,
    required: 'inserisci il titolo'
	
  },
  body: {
    type: String,
     required: 'inserisci il corpo '
  },
  status: {
    type: [{
      type: String,
      enum: ['public', 'featured']
    }],
    
  }
});

module.exports = mongoose.model('articles',aggiungiArticolo);