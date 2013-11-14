/*!
 * Module dependencies.
 */

var fs = require('fs'),
    path = require('path');

/**
 * Read index.html from project
 *
 * Options:
 *
 *   - `projectPath` {String} is path checked.
 *
 * Returns:
 *
 *   - {String} contents of index.html file
 */

module.exports.readIndexHtml = function(projectPath) {
    var indexPath = path.join(projectPath, 'index.html');

    return fs.readFileSync(indexPath, {encoding: 'utf8'});
};