var html = require('../cordova-linter/util/html.js');

module.exports = {
    findAbsolutePathsInHtml: function (htmlString) {
        return html.findSrcOrHrefByRegExp(htmlString, /^\/[^\/]/);
    }
};
