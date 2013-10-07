var cheerio = require('cheerio');

module.exports = {
    findAbsolutePathsInHtml: function (htmlString) {
        var $ = cheerio.load(htmlString);

        var rv = [];

        $('[src], [href]').each( function(i, elem) {
            var path = $(elem).attr('src') || $(elem).attr('href');
            if (path && path.charAt(0) === '/') {
                rv.push(elem);
            }
        });

        return rv;
    }
};
