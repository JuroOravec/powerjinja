const fs = require('fs');
const path = require('path');

const createInitialize = require('./create-initialize');

fs.readdirSync(path.resolve('packages'))
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Creating initialize file for package: "${package}"...`);
        createInitialize(package);
        process.stdout.write(' Done!\n');
    });
console.log('Files have been created!');