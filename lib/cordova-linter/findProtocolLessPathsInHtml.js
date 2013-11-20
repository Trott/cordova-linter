var html = require('../cordova-linter/util/html.js');

module.exports = {
    findProtocolLessPathsInHtml: function (htmlString) {

        return html.findSrcOrHrefByRegExp(htmlString, /^\/\//);
    }
};