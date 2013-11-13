module.exports = {
    lint: function (html) {
        var rv = {
            status: this.status.OK
        };

        var absolutePaths = this.findAbsolutePathsInHtml(html);
        if (absolutePaths.length > 0) {
            rv.status = this.status.WARNING;
        }
        //TODO: You know, actually lint something here.

        return rv;
    }
};
