const UsersDAO = require('./private/dao');
const AppSettings = require('./../settings/service');

class UsersService {
    getUsers(options) {
      return new Promise((resolve, reject) => {
        options = options || {};
        UsersDAO.fetchMany({}, options)
                .then(users => resolve(users))
                .catch(err => reject(err));
      });
    }

    createUser(username, password, options) {
      return new Promise((resolve, reject) => {
        if(!username || !password) {
          return reject('Username or password is empty');
        }
        if(username.length < AppSettings.username.minlength ||
           username.length > AppSettings.username.maxlength) {
          return reject('Username length error');
        }
        if(password.length < AppSettings.password.minlength ||
           password.length > AppSettings.password.maxlength) {
          return reject('Password length error');
        }
        UsersDAO.insert({
          username: username,
          password: password
        })
        .then(user => resolve(user))
        .catch(err => reject(err));
      });
    }
}


module.exports = new UsersService();
