const QS = require('./../settings/service').query;

class RequestService {
  static parseQuery(req, res, next) {
    let limit = parseInt(req.query.limit);
    if(isFinite(limit)) {
      req.limit = (limit > QS.limit_min && limit < QS.limit_max)
                  ? limit
                  : QS.limit_default;
    }
    let offset = parseInt(req.query.offset);
    if(isFinite(offset)) {
      req.offset = (offset > QS.offset.min) ? offset : QS.offset_default;
    }
    next();
  }
}

module.exports = RequestService;
