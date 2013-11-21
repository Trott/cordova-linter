var html = require('../cordova-linter/util/html.js');

module.exports = {
    lint: function (htmlString) {
        var that = this;

        var rv = {
            status: this.status.OK,
            messages: [],
        };

        var runTest = function (test, messageCallback) {
            var results = test(htmlString);
            if (results.length > 0) {
                rv.status = that.status.WARNING;
            }

            for (var i=0, l=results.length; i<l; i++) {
                rv.messages.push(messageCallback(results[i]));
            }
        };

        var srcOrHrefMessage = function (type) {
            return function (result) {
                return type + ' path in src or href attribute of ' + result.name + ' tag: ' + (result.attribs.src || result.attribs.href);
            };
        };

        runTest(that.findAbsolutePathsInHtml, srcOrHrefMessage('Absolute'));
        runTest(that.findProtocolLessPathsInHtml, srcOrHrefMessage('Protocol-less'));

        var js = html.findJs(htmlString);

        var cordovaJsFound = js.some(function (scriptElement) {
            return scriptElement.src && scriptElement.src === 'cordova.js';
        });

        if (! cordovaJsFound) {
            rv.status = that.status.WARNING;
            rv.messages.push('Script tag loading cordova.js not found');
        }

        return rv;
    }
};
