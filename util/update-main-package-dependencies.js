const fs = require('fs');
const path = require('path');
const spawnSync = require('child_process').spawnSync;

fs.readdirSync(path.resolve('packages')).forEach((package, i, arr) => {
    if (package === 'powerjinja') {
        return;
    }
    process.stdout.write(`(${i}/ ${arr.length-1}) Adding package: "${package}"...`);
    const cmd = spawnSync('lerna', ['add', package, `--scope=powerjinja`]);
    if (cmd.error) {
        throw Error(cmd.error);
    }
    process.stdout.write(' Done!\n');
});

console.log('Main module updated!');