module.exports = {
    lint: function (html) {
        var that = this;

        var rv = {
            status: this.status.OK,
            messages: [],
        };

        var runTest = function (test, messageCallback) {
            var i,l;

            var results = test(html);
            if (results.length > 0) {
                rv.status = that.status.WARNING;
            }

            for (i=0, l=results.length; i<l; i++) {
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

        return rv;
    }
};
