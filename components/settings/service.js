module.exports = {
  username: {
    minlength: 4,
    maxlength: 20
  },
  password: {
    minlength: 6,
    maxlength: 24
  },
  query: {
    limit_min: 1,
    limit_max: 100,
    limit_default: 10,
    offset_min: 0,
    offset_default: 0
  },
  url: {
    minlength: 10,
    maxlength: 2048
  }

}
