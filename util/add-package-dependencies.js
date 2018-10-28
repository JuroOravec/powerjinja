const fs = require('fs');
const path = require('path');
const spawnSync = require('child_process').spawnSync;

module.exports = function addPackageDependencies(packageName) {
    if (!fs.existsSync(path.resolve('packages/' + packageName))) {
        throw Error(`No package with name "${packageName}" found!`);
    }

    const cmd = spawnSync('lerna', ['add', 'powerjinja-core', `--scope=${packageName}`]);
    if (cmd.error) {
        throw Error(cmd.error);
    }

    console.log('Dependencies added!');
}