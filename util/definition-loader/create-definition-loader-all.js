const fs = require('fs');
const path = require('path');

const createDefinitionLoader = require('./create-definition-loader');

fs.readdirSync(path.resolve('packages'))
    .filter(package => package !== 'powerjinja')
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Creating "load-definitions" file for package: "${package}"...`);
        createDefinitionLoader(package);
        process.stdout.write(' Done!\n');
    });
console.log('Files have been created!');