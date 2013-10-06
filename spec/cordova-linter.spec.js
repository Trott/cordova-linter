/* global jasmine:false */
/* global describe:false */
/* global it:false */
/* global expect:false */

var CordovaLinter = require('../lib/cordova-linter.js'),
    cordovaLinter = new CordovaLinter();

describe('cordovaLinter', function() {
    it('should define cordovaLinter.version', function() {
        expect(cordovaLinter.version).toEqual(jasmine.any(Function));
    });
});
