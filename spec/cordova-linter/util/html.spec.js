/* global describe:false */
/* global it */
/* global expect */

/*!
 * Module dependencies.
 */

var html = require('../../../lib/cordova-linter/util/html');

/*!
 * Specification: Project Operations
 */

describe('html', function() {
    describe('html.findJs(htmlString)', function() {

        describe('when no src attribute', function () {
            it('should return text', function () {
                expect(html.findJs('<script>var foo = null;</script>')[0].text).toEqual('var foo = null;');
            });
        });

        describe('when src attribute present and no type is set', function () {
            it('should return src', function () {
                expect(html.findJs('<script src="foo.js"></script>')[0].src).toEqual('foo.js');
            });
        });

        describe('when src attribute present and type is set', function () {
            it('should return src', function () {
                expect(html.findJs('<script type="text/javascript" src="cordova.js"></script>')[0].src).toEqual('cordova.js');
            });
        });
    });
});
