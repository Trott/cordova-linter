var cheerio = require('cheerio');

module.exports = {
    findProtocolLessPathsInHtml: function (htmlString) {
        var $ = cheerio.load(htmlString);

        var rv = [];

        $('[src], [href]').each( function(i, elem) {
            var path = $(elem).attr('src') || $(elem).attr('href');
            if (path && path.match(/^\/\//)) {
                rv.push(elem);
            }
        });

        return rv;
    }
};