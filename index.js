'use strict'

/*!
 * imports.
 */

var debug = require('debug')('rerun-script:index')
var path = require('path')

/*!
 * exports.
 */

module.exports = getWatches

/**
 * Get package watches.
 *
 * @param {String} directory
 * Package directory.
 *
 * @return {Array}
 * Array of watches.
 */

function getWatches (directory) {
  var package_path = resolve(directory || './')
  var pkg = read(package_path)
  var watches = extract(pkg)
  return Array.isArray(watches) ? watches : []
}

function resolve (directory) {
  var package_path = path.resolve(directory, 'package.json')
  debug('package.json path: %s', package_path)
  return package_path
}

function read (package_path) {
  try {
    var pkg = require(package_path)
  } catch (e) {
    throw new Error(package_path + ' does not exist.')
  }

  debug('package.json contents: %s', JSON.stringify(pkg))
  return pkg
}

function extract (pkg) {
  var watches
  if (Array.isArray(pkg.watches)) {
    watches = pkg.watches
  } else {
    watches = Object.keys(pkg.watches).map(function (key) {
      return {
        'script': key,
        'patterns': pkg.watches[key]
      }
    })
  }
  watches = watches.map(function (watch) {
    if (!Array.isArray(watch.patterns)) {
      watch.patterns = [watch.patterns]
    }
    return watch
  })
  debug('watches list: %s', JSON.stringify(watches))
  return watches
}
