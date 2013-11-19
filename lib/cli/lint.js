/*!
 * Module dependencies.
 */

var cordovaLinter = require('../main.js');
var project = require('../cordova-linter/util/project.js');

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
    console.log('Linting ' + this.projectPath);
    var html;
    try {
        html = project.readIndexHtml(this.projectPath);
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
    var result = cordovaLinter.lint(html);
    if (result.status === cordovaLinter.status.OK) {
        console.log('Project is lint free!');
    } else {
        // Handle warnings in project here
        var i,l;
        for (i=0,l=result.messages.length; i<l; i++) {
            console.log(result.messages[i]);
        }
    }
    callback();
};