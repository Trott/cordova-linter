/*!
 * Module dependencies.
 */

var cordovaLinter = require('../main.js');

/**
 * $ cordova-linter version
 *
 * Outputs the version to the console.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 */

module.exports = function(argv, callback) {
    console.log(cordovaLinter.version());
    callback();
};
