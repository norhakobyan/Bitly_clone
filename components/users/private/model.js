const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;
const AppSettings = require('./../../settings/service');

function generateAPIkey() {
  return shortid.generate() + '-' + shortid.generate() + '-' + shortid.generate();
}

let UsersSchema = new Schema({
  key: {
    type: String,
    default: generateAPIkey,
    index: {unique: true}
  },
  username: {
    type: String,
    minlength: AppSettings.username.minlength,
    maxlength: AppSettings.username.maxlength,
    index: {unique: true},
    required: true
  },
  password: {
    type: String,
    required: true
  },
  urls: [{type: Schema.Types.ObjectId, ref: 'urls'}] 
});

module.exports = UsersSchema;
