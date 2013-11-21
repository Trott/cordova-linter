var html = require('../cordova-linter/util/html.js'),
    esprima = require('esprima');

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

        for (var i=0, l=js.length; i<l; i++) {
            if (js[i].text) {
                js[i].syntax = esprima.parse(js[i].text);
            } else {
                // TODO: Check that src is local, then use fs to suck it in. Oh, hey, uh, base tags?
            }
        }

        // TODO: Find event assignments in .syntax and flag load event handlers

        return rv;
    }
};
