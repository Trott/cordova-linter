module.exports = {
    lint: function (html) {
        var rv = {
            status: this.status.OK,
            messages: [],
        };

        var i,l;

        var absolutePaths = this.findAbsolutePathsInHtml(html);
        if (absolutePaths.length > 0) {
            rv.status = this.status.WARNING;
        }

        for (i=0, l=absolutePaths.length; i<l; i++) {
            rv.messages.push('Absolute path in src or href attribute of ' + absolutePaths[i].name + ' tag: ' + (absolutePaths[i].attribs.src || absolutePaths[i].attribs.href));
        }

        var protocolLessPaths = this.findProtocolLessPathsInHtml(html);
        if (protocolLessPaths.length > 0) {
            rv.status = this.status.WARNING;
        }

        for (i=0, l=protocolLessPaths.length; i<l; i++) {
            rv.messages.push('Protocol-less path in src or href attribute of ' + protocolLessPaths[i].name + ' tag: ' + (protocolLessPaths[i].attribs.src || protocolLessPaths[i].attribs.href));
        }

        return rv;
    }
};
