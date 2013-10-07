/* global describe:false */
/* global beforeEach */
/* global it */
/* global expect */
/* global jasmine */
/* global spyOn */

var CordovaLinter = require('../../lib/cordova-linter.js'),
    fs = require('fs'),
    cordovaLinter;

/*
 * Specification: cordovaLinter.version()
 */

describe('cordovaLinter.version()', function() {
    beforeEach(function() {
        cordovaLinter = new CordovaLinter();
    });

    it('should return a string', function() {
        expect(cordovaLinter.version()).toEqual(jasmine.any(String));
    });

    it('should contain version', function() {
        spyOn(fs, 'readFileSync').andReturn('{ "version": "2.0.3" }');
        expect(cordovaLinter.version()).toEqual('2.0.3');
    });
});
