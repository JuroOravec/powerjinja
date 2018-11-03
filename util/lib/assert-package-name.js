const fs = require('fs');
const path = require('path');

module.exports = function assertPackageName(pkg) {
    if (!pkg) {
        throw Error('No package given!');
    }

    if (!fs.existsSync(path.resolve('packages/' + pkg))) {
        throw Error(`No package with name "${pkg}" found!`);
    }
    return true;
}