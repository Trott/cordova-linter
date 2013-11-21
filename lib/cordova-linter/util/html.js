/*!
 * Module dependencies.
 */

var cheerio = require('cheerio');

/**
 * Find src or href attributes that match a regular expression
 *
 * Options:
 *
 *   - `htmlString` {String} is string of HTML to parse
 *   - `regExp` {RegExp} is regular expression to match.
 *
 * Returns:
 *
 *   - {Array} DOM elements containing a src or href attribute matching regExp
 */

module.exports.findSrcOrHrefByRegExp = function(htmlString, regExp) {
    var $ = cheerio.load(htmlString);

    var rv = [];

    $('[src], [href]').each( function(i, elem) {
        var path = $(elem).attr('src') || $(elem).attr('href');
        if (path && path.match(regExp)) {
            rv.push(elem);
        }
    });

    return rv;
};

/**
 * Find script tags
 *
 * Options:
 *
 *   - `htmlString` {String} is string of HTML to parse
 *
 * Returns:
 *
 *   - {Array} DOM elements that are script tags
 */

module.exports.findJs = function(htmlString) {
    var $ = cheerio.load(htmlString);

    var rv = [];

    var scriptTypeRegExp = /^\s*(text\/javascript|application\/(javascript|ecmascript))\s*$/i;

    $('script').each( function(i, elem) {
        if (! $(elem).attr('type') || $(elem).attr('type').match(scriptTypeRegExp)) {
            if ($(elem).attr('src')) {
                rv.push({ src: $(elem).attr('src') });
            } else {
                rv.push({ text: $(elem).text() });
            }
        }
    });

    return rv;
};