/**
 * Module dependencies.
 */

// var cordovaLinter = require('../cordova-linter.js');

/**
 * Parse command-line arguments.
 *
 * Inspects the arguments and calls the appropriate action.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist.argv object.
 *   - `[callback]` {Function} is called on completion.
 */

module.exports = function(argv, callback) {
    // optional callback
    callback = callback || function() {};

    // --version
    if (argv.version || argv.v) {
        this.version(argv, callback);
        return;
    }

    // --verbose
    // if (argv.verbose || argv.V) {
    //     cordovaLinter.mode({ verbose: true });
    // }

    // --help
    if (argv.help || argv.h || argv._.length > 1) {
        this.help(argv, callback);
        return;
    }

    // only argument is path to project
    if (argv._.length === 1) {
        this.projectPath = argv._[0];
    } else {
        this.projectPath = process.cwd();
    }

    this.lint(argv, callback);
};
