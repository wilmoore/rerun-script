'use strict';

var path = require('path');
var debug = require('debug')('watch-and-run:index');

module.exports = getWatches;

/**
 * Get package watches.
 *
 * @param {String} directory
 * Package directory.
 *
 * @return {Array}
 * Array of watches.
 */

function getWatches(directory) {
  var package_path = resolve(directory || '../..');
  var pkg = read(package_path);
  var watches = extract(pkg);
  return Array.isArray(watches) ? watches : [];
}

function resolve(directory) {
  var package_path = path.resolve(directory, 'package.json');
  debug('package.json path: %s', package_path);
  return package_path;
}

function read(package_path) {
  var pkg = require(package_path);
  debug('package.json contents: %s', JSON.stringify(pkg));
  return pkg;
}

function extract(pkg) {
  var watches = pkg.watches;
  debug('watches list: %s', JSON.stringify(watches));
  return watches;
}
