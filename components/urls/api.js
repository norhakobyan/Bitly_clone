const express = require('express');
const UrlsRouter = express.Router();
const app = express();
const UrlsService = require('./service');

UrlsRouter.get('/:short', (req, res) => {
  UrlsService.resolveUrl(req.params.short)
            .then(original_url => {
              res.redirect(original_url);
            }).catch(err => res.send(err));
});

UrlsRouter.post('/', (req, res) => {
  UrlsService.createUrl(req.body.original)
             .then(short_url => {
               return res.send(short_url);
             }).catch(err => {
               res.send(err);
             });
});

module.exports = UrlsRouter;
