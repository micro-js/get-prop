/**
 * Imports
 */

var getProp = require('..')
var assert = require('assert')

/**
 * Tests
 */

describe('getProp', function () {
  it('should work', function () {
    assert.equal(getProp({}, 'a.b'), undefined)
    assert.equal(getProp({a: {b: 1}}, 'a.b'), 1)
    assert.equal(getProp({a: 1}, 'a'), 1)
    assert.equal(getProp({a: {b: 1}}, ['a', 'b']), 1)
    assert.equal(getProp(undefined, ['a']), undefined)
  })
})
