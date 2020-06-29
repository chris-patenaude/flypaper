const expressLoader = require('./expressServer')
const expressSessionLoader = require('./expressSession')
const auth0Loader = require('./auth0')

module.exports = async app => {
  await expressLoader(app);
  await expressSessionLoader(app);
  await auth0Loader(app);
}