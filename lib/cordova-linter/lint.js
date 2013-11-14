module.exports = {
    lint: function (html) {
        var rv = {
            status: this.status.OK
        };

        var absolutePaths = this.findAbsolutePathsInHtml(html);
        if (absolutePaths.length > 0) {
            rv.status = this.status.WARNING;
        }
        rv.absolutePaths = absolutePaths;

        return rv;
    }
};
