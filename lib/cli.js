// var cordovaLinter = require('./cordova-linter');
/**
 * Command line interface object.
 */

function CLI() {
    // This can be prevented by using dependency injection
    this.cli = this;
}

/**
 * Command line commands.
 */

CLI.prototype.argv = require('./cli/argv');
CLI.prototype.help = require('./cli/help');
CLI.prototype.lint = require('./cli/lint');
CLI.prototype.version = require('./cli/version');

/*!
 * CLI messages.
 */

// cordovaLinter.on('log', function() {
//     console.log.apply(this, arguments);
// });

// cordovaLinter.on('warn', function() {
//     console.warn.apply(this, arguments);
// });

// cordovaLinter.on('error', function(e) {
//     console.error.call(this, e.message);
// });

// cordovaLinter.on('raw', function() {
//     console.raw.apply(this, arguments);
// });

/*!
 * Expose the CLI object.
 */

module.exports = CLI;
