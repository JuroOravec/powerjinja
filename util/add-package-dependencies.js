const spawnSync = require('child_process').spawnSync;

const assertPackageName = require('./lib/assert-package-name');

module.exports = function addPackageDependencies(packageName) {
    assertPackageName(packageName);

    const cmd = spawnSync('lerna', ['add', 'powerjinja-core', `--scope=${packageName}`]);
    if (cmd.error) {
        throw Error(cmd.error);
    }

    console.log('Dependencies added!');
}