/* global describe:false */
/* global beforeEach:false */
/* global spyOn:false */
/* global it:false */
/* global expect:false */
var shell = require('shelljs'),
    path = require('path'),
    bin = 'node ' + path.resolve(path.join(__dirname, '..', 'bin', 'cordova-linter'));

describe('$ cordova-linter [options] commands', function() {
    beforeEach(function() {
        spyOn(process.stdout, 'write');
    });

    it('should support no arguments', function() {
        var process = shell.exec(bin + '', { silent: true });
        expect(process.output).toMatch('Usage:');
    });

    it('should support commands', function() {
        var process = shell.exec(bin + ' version', { silent: true });
        expect(process.output).toMatch(/^\w+\.\w+\.\w+/);
    });

    it('should support options', function() {
        var process = shell.exec(bin + ' --version', { silent: true });
        expect(process.output).toMatch(/^\w+\.\w+\.\w+/);
    });
});
