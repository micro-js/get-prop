/**
 * Imports
 */

var getProp = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should get property using string', function (t) {
  var obj = {foo: 'bar'}

  t.equal(getProp('foo', obj), 'bar')
  t.end()

})

test('should get property using array', function (t) {
  var obj = {foo: 'bar'}

  t.equal(getProp(['foo'], obj), 'bar')
  t.end()
})


test('should get nested property using string', function (t) {
  var obj = {foo: {bar: 'bax'}}

  t.equal(getProp('foo.bar', obj), 'baz')
  t.end()
})

test('should get nested property using array', function (t) {
  var obj = {foo: {bar: 'bax'}}

  t.equal(getProp(['foo', 'bar'], obj), 'baz')
  t.end()
})
