var path = require('path'),
    fs = require('fs');

module.exports = {
    version: function () {
        var packagePath = path.join(__dirname, '..', '..', 'package.json'),
        packageJSON = JSON.parse(fs.readFileSync(packagePath), 'utf8');
        return packageJSON.version;
    }
};
