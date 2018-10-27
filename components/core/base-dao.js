const DBConnection = require('./db');

class BaseDAO {
  constructor(collection, schema) {
    if(!collection || !schema) {
      throw 'Protocol Violation';
    }
    this.model = DBConnection.model(collection, schema);
  }

  fetchMany(query, options) {
    query = query || {};
    options = options || {};
    return this.model.find(query)
                .limit(options.limit)
                .skip(options.offset)
                .sort(options.sort || {})
                .exec();
  }

  fetchOne(query) {
    query = query || {};
    return this.model.findOne(query);
  }

  insert(obj) {
    return this.model.create(obj);
  }

  update(query, obj) {
    if(!query || JSON.stringify(query) == '{}') {
      throw 'lav chi';
    }
    return this.model.update(query, {$set: obj});
  }

  remuve(query) {
    if(!query || JSON.stringify(query) == '{}') {
      throw 'lav chi';
    }
    return this.model.remuve(query);
  }
}

module.exports = BaseDAO;
