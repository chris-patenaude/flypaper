const session = require("express-session")
const config = require('../config')

const sessionConfig = {
  secret: 'TODO: this needs to be a random secret',
  cookie: {},
  resave: false,
  saveUninitialized: true
}

module.exports = app => {
  if(app.get('env') === 'production') {
    sessionConfig.cookie.secure = true;
  }
  app.use(session(sessionConfig));
}