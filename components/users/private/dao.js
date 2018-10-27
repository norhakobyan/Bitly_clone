const BaseDAO = require('./../../core/base-dao');
const UsersSchema = require('./model.js');

class UsersDAO extends BaseDAO {
  constructor() {
    super('users', UsersSchema);
  }
}

module.exports = new UsersDAO();
