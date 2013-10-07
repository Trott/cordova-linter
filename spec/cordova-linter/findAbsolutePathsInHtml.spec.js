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

    it('should return an empty object when there are no absolute links', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<img src="./foo.png">').length).toEqual(0);
    });

    it('should return a non-empty object when there are absolute links', function() {
        expect(cordovaLinter.findAbsolutePathsInHtml('<img src="/foo.png">').length).toEqual(1);
    });
});
