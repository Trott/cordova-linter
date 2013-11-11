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

    it('should return success if linting an empty string', function() {
        expect(cordovaLinter.lint('').status).toEqual(cordovaLinter.status.OK);
    });
});
