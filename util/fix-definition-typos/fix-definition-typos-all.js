const fs = require('fs');
const path = require('path');

const fixDefinitionTypos = require('./fix-definition-typos');

fs.readdirSync(path.resolve('packages'))
    .filter(package => package !== 'powerjinja')
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Updating definitions for package: "${package}"...`);
        fixDefinitionTypos(package);
        process.stdout.write(' Done!\n');
    });
console.log('Definitions have been updated!');