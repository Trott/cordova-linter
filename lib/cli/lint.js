/*!
 * Module dependencies.
 */

var cordovaLinter = require('../main.js');

/**
 * $ cordova-linter version
 *
 * Outputs the lint results to the console.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 */

module.exports = function(argv, callback) {
    var result = cordovaLinter.lint();
    if (result.status === cordovaLinter.status.OK) {
        console.log('Project is lint free!');
    } else {
        // Handle errors in project here
        console.log('Whoa, Nellie! There were errors!');
    }
    callback();
};