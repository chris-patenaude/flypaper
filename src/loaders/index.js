const expressLoader = require('./expressServer')
const auth0Loader = require('./auth0')

module.exports = async app => {
  await auth0Loader(app);
  await expressLoader(app);
}