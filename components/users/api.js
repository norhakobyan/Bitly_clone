const express = require('express');
const UsersRouter = express.Router();
const UsersService = require('./service');


UsersRouter.get('/', (req, res) => {
  UsersService.getUsers({
    limit: req.limit,
    offset: req.offset
  }).then(users => {
    return res.send(users);
  }).catch(err => {
    return res.send(err);
  });
});

UsersRouter.post('/', (req, res) => {
  UsersService.createUser(req.body.username, req.body.password, {
    limit: req.limit,
    offset: req.offset
  }).then(user => {
    return res.send(user);
  }).catch(err => {
    console.log(err);
    return res.send(err);
  });
});

module.exports = UsersRouter;
