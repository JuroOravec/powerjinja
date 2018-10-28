const fs = require('fs');
const path = require('path');
const spawnSync = require('child_process').spawnSync;

fs.readdirSync(path.resolve('packages'))
    .filter(package => package !== 'powerjinja' && package !== 'powerjinja-core')
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Updating package: "${package}"...`);
        const cmd = spawnSync('npm', ['run', 'create-index', '--', package]);
        if (cmd.error) {
            throw Error(cmd.error);
        }
        process.stdout.write(' Done!\n');
    });
console.log('Packages have been updated!');