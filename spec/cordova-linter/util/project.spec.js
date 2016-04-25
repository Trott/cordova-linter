/* global describe:false */
/* global it */
/* global expect */

/*!
 * Module dependencies.
 */

var project = require('../../../lib/cordova-linter/util/project');

/*!
 * Specification: Project Operations
 */

describe('project', function() {
    describe('project.readIndexHtml(projectPath)', function() {

        describe('when index.html file does not exist', function() {
            it('should throw an error', function () {
                expect(function () {project.readIndexHtml('.');}).toThrow();
            });
        });

        describe('when index.html file exists', function() {
            it('should return contents of index.html', function() {
                expect(project.readIndexHtml('spec/fixture/project/Baz/www')).toMatch(/<title>Hello World<\/title>/);
            });
        });
    });
});
