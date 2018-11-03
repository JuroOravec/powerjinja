const fs = require('fs');
const path = require('path');

const createIndex = require('./create-index');

fs.readdirSync(path.resolve('packages'))
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Creating index file for package: "${package}"...`);
        createIndex(package);
        process.stdout.write(' Done!\n');
    });
console.log('Files have been created!');