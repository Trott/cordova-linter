/* global describe:false */
/* global beforeEach:false */
/* global spyOn:false */
/* global it:false */
/* global expect:false */
var shell = require('shelljs'),
    path = require('path'),
    bin = 'node ' + path.resolve(path.join(__dirname, '..', 'bin', 'cordova-linter'));

describe('$ cordova-linter [options] [projectPath]', function() {
    beforeEach(function() {
        spyOn(process.stdout, 'write');
    });

    it('should support no arguments', function() {
        expect ( function () {
            var myProcess = shell.exec(bin, { silent: true });
            expect(myProcess.output.indexOf('Linting ' + process.cwd())).toEqual(0);
        });
    });

    it('should support a path argument', function() {
        var projectPath = path.join('fixture', 'project', 'Baz');
        var process = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(process.output.indexOf('Linting ' + projectPath)).toEqual(0);
    });

    it('should support options', function() {
        var process = shell.exec(bin + ' --version', { silent: true });
        expect(process.output).toMatch(/^\w+\.\w+\.\w+/);
    });

    it ('should support unknown commands', function() {
        var process = shell.exec(bin + ' deep_sea_fangly_fish', { silent: true });
        expect(process.output).toMatch('Linting deep_sea_fangly_fish');
    });
});
