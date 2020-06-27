const expressLoader = require('./expressServer.js')

module.exports = async app => {
  await expressLoader(app);
}