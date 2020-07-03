const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const {auth0} = require('../config');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${auth0.domain}/.well-known/jwks.json`
  }),
  audience: auth0.apiID,
  issuer: `https://${auth0.domain}/`,
  algorithms: ['RS256']
});

module.exports = app => {
  app.use(checkJwt)
}