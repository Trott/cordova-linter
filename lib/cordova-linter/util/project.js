/*!
 * Module dependencies.
 */

var fs = require('fs'),
    path = require('path');

/**
 * Check Path to be a Cordova Project.
 *
 * Options:
 *
 *   - `projectPath` {String} is path checked.
 *
 * Returns:
 *
 *   - {Boolean} true if valid Cordova project.
 */

module.exports.readIndexHtml = function(projectPath) {
    var indexPath = path.join(projectPath, 'www', 'index.html');

    return fs.readFileSync(indexPath, {encoding: 'utf8'});
};