/* global describe:false */
/* global beforeEach */
/* global it */
/* global expect */

var CordovaLinter = require('../../lib/cordova-linter.js'),
    cordovaLinter;

/*
 * Specification: cordovaLinter.lint()
 */

describe('cordovaLinter.lint()', function() {
    beforeEach(function() {
        cordovaLinter = new CordovaLinter();
    });

    it('should return success if no lint found', function() {
        expect(cordovaLinter.lint('<script src="cordova.js"></script>').status).toEqual(cordovaLinter.status.OK);
    });

    it('should return a warning if linting a DOM with an absolute path', function() {
        expect(cordovaLinter.lint('<a href="/foo/bar">Absolute Path!</a>').status).toEqual(cordovaLinter.status.WARNING);
    });
});
