var cheerio = require('cheerio');

module.exports = {
    findAbsolutePathsInHtml: function (htmlString) {
        var $ = cheerio.load(htmlString);

        var rv = [];

        $('[src]').each( function(i, elem) {
            if ($(elem).attr('src').charAt(0) === '/') {
                rv.push(elem);
            }
        });

        return rv;
    }
};
