/* global describe:false */
/* global beforeEach */
/* global it */
/* global expect */

var CordovaLinter = require('../../lib/cordova-linter.js'),
    cordovaLinter;

/*
 * Specification: cordovaLinter.findAbsolutePathsInHtml()
 */

describe('cordovaLinter.findAbsolutePathsInHtml()', function() {
    beforeEach(function() {
        cordovaLinter = new CordovaLinter();
    });

    it('should not flag a relative src path', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<img src="./foo.png">').length).toEqual(0);
    });

    it('should flag an absolute src path', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<img src="/foo.png">').length).toEqual(1);
    });

    it ('should not flag a relative href path', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<a href="whatever.html">Whatever!</a>').length).toEqual(0);
    });

    it ('should flag an absolute href path', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<a href="/whatever.html">Whatever!</a>').length).toEqual(1);
    });
});
