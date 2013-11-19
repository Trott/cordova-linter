/* global jasmine:false */
/* global describe:false */
/* global it:false */
/* global expect:false */

var CordovaLinter = require('../lib/cordova-linter.js'),
    cordovaLinter = new CordovaLinter();

describe('cordovaLinter', function () {
	it('should define cordovaLinter.findAbsolutePathsInHtml', function () {
        expect(cordovaLinter.findAbsolutePathsInHtml).toEqual(jasmine.any(Function));
    });

    it('should define cordovaLinter.findProtocolLessPathsInHtml', function () {
        expect(cordovaLinter.findProtocolLessPathsInHtml).toEqual(jasmine.any(Function));
    });

	it('should define cordovaLinter.lint', function () {
        expect(cordovaLinter.lint).toEqual(jasmine.any(Function));
    });

    it('should define cordovaLinter.version', function () {
        expect(cordovaLinter.version).toEqual(jasmine.any(Function));
    });
});
