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

    it ('should report absolute paths in href attributes', function() {
        var projectPath = path.join('spec' , 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output).toMatch(/Absolute path in src or href attribute of link tag: \/css\/index\.css/);
    });

    it ('should report absolute paths in src attributes', function() {
        var projectPath = path.join('spec', 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output).toMatch(/Absolute path in src or href attribute of script tag: \/js\/index\.js/);
    });

    it ('should report protocol-less paths in href attributes', function() {
        var projectPath = path.join('spec' , 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output).toMatch(/Protocol-less path in src or href attribute of link tag: \/\/example\.com\/normalize\.css/);
    });

    it ('should report protocol-less paths in src attributes', function() {
        var projectPath = path.join('spec', 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output).toMatch(/Protocol-less path in src or href attribute of script tag: \/\/example\.com\/jquery\.js/);
    });

    it ('should exit with an error code when linting a non-existent path', function () {
        var myProcess = shell.exec(bin + ' non-existent_path', { silent: true });
        expect(myProcess.code).not.toEqual(0);
    });

    it ('should report a missing cordova.js script tag', function () {
        var projectPath = path.join('spec', 'fixture', 'project', 'Bad', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output.indexOf('Script tag loading cordova.js not found')).not.toEqual(-1);
    });

    it('should not report a missing cordova.js script tag if one is found', function() {
        var projectPath = path.join('spec' + 'fixture', 'project', 'Baz', 'www');
        var myProcess = shell.exec(bin + ' ' + projectPath, { silent: true });
        expect(myProcess.output.indexOf('Script tag loading cordova.js not found')).toEqual(-1);
    });
});
