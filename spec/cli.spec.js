/* global describe:false */
/* global beforeEach:false */
/* global spyOn:false */
/* global it:false */
/* global expect:false */
var shell = require('shelljs'),
    path = require('path'),
    bin = 'node ' + path.resolve(path.join(__dirname, '..', 'bin', 'cordova-linter'));

describe('$ cordova-linter [path]', function() {
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
        var projectPath = path.join('spec' + 'fixture', 'project', 'Baz', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output.indexOf('Linting ' + projectPath)).toEqual(0);
    });

    it('should support options', function() {
        var myProcess = shell.exec(bin + ' --version', { silent: true });
        expect(myProcess.output).toMatch(/^\w+\.\w+\.\w+/);
    });

    it ('should report absolute paths', function() {
        var projectPath = path.join('spec' , 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output).toMatch(/link tag: \/css\/index.css/);
    });

    it ('should exit with an error code', function () {
        var myProcess = shell.exec(bin + ' non-existent_path', { silent: true });
        expect(myProcess.code).not.toEqual(0);
    });
});
