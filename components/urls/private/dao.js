const BaseDAO = require('./../../core/base-dao');
const UrlSchema = require('./model');


class UrlDAO extends BaseDAO {
  constructor() {
    super('urls', UrlSchema);
  }
}

module.exports = new UrlDAO();
