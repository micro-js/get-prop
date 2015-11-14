/**
 * getProp
 */

function getProp (obj, path) {
  if (typeof path === 'string') {
    path = path.split('.')
  }

  for (var i = 0, len = path.length; i < len && obj; ++i) {
    obj = obj[path[i]]
  }

  return obj
}

/**
 * Exports
 */

module.exports = getProp
