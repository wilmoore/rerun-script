'use strict'

/*!
 * imports.
 */

var test = require('tape')
var getWatches = require('./')

test('watches is an array', function (t) {
  var watches = getWatches('.')
  t.assert(Array.isArray(watches), t.name)
  t.end()
})

test('watches count', function (t) {
  var watches = getWatches('.')
  t.equal(2, watches.length)
  t.end()
})
