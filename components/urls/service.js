const UrlDAO = require('./private/dao');
const shortid = require('shortid');

class UrlService {
    getUrls(options) {
      return new Promise((resolve, reject) => {
        UrlDAO.fetchMany({}, options)
              .then(urls => resolve(urls))
              .catch(err => reject(err));
      });
    }

    createUrl(original) {
      return new Promise((resolve, reject) => {
        if(!original) {
          return reject('no url provided');
        }
        let short = shortid.generate();
        UrlDAO.insert({
          original_url: original,
          short_url: short
        }).then(url => resolve(url))
          .catch(err => reject(err));
      });
    }

    resolveUrl(short) {
      return new Promise((resolve, reject) => {
        UrlDAO.fetchOne({short_url: short})
              .then(url => {
                if(!url) {
                  return reject('not found');
                }
                resolve(url.original_url);
              })
              .catch(err => reject(err));
      });
    }
}

module.exports = new UrlService();
