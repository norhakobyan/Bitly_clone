const mongoose = require('mongoose');
module.exports = mongoose.createConnection('mongodb://localhost:27017/bitlydb', {
  useNewUrlParser: true
});
