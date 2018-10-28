const copyPackageTemplate = require('./copy-package-template');
const addPackageDependencies = require('./add-package-dependencies');

if (process.argv.length < 3) {
    throw Error('No package given!');
}

copyPackageTemplate(process.argv[2]);
addPackageDependencies(process.argv[2]);

console.log('Done!');