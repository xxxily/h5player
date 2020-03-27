const typeofLibs = require('./typeof')
const stringsLibs = require('./string')
const objectLibs = require('./object')
const helperLibs = require('./helper')

const utils = {
  ...typeofLibs,
  ...stringsLibs,
  ...objectLibs,
  ...helperLibs
}

module.exports = utils
