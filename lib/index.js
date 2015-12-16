/**
 * Modules
 */

var isString = require('@f/is-string')

/**
 * Expose getProp
 */

module.exports = getProp['default'] = getProp

/**
 * Get propert
 * @param  {Array|String} path path to property
 * @param  {Object} obj object to retrieve property from
 * @return {Mixed} property
 */

function getProp (path, obj) {
  if (isString(path)) {
    path = path.split('.')
  }

  for (var i = 0, len = path.length; i < len && obj; ++i) {
    obj = obj[path[i]]
  }

  return obj
}
