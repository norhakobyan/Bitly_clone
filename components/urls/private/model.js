const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppSettings = require('./../../settings/service');

let UrlSchema = new Schema({
  original_url: {
    type: String,
    minlength: AppSettings.url.minlength,
    maxlength: AppSettings.url.maxlength
  },
  short_url: {
    type: String,
    index: true
  }
});

module.exports = UrlSchema;
