const express = require('express');
const bs = require('body-parser');
const RS = require('./components/request/service');
const app = express();
app.use(bs.json());
app.use(bs.urlencoded({extended: false}))
app.use(RS.parseQuery);

const UsersRouter = require('./components/users/api');
const UrlsRouter = require('./components/urls/api');
app.use('/urls', UrlsRouter);
app.use('/users', UsersRouter);

app.listen(3003);
