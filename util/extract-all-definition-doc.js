const fs = require('fs');
const path = require('path');

const dropFirst = require('./lib/drop-first');
const exportDefinitionDoc = require('./extract-definition-doc.js');
const generateNameVariants = require('./lib/generate-name-variants');

module.exports = function extracAllDefinitionDoc() {
    const packages = fs.readdirSync(path.resolve('packages'))
        .filter(package => package !== 'powerjinja');

    const allDocData = packages.reduce((aggregate, package, i, arr) => {
        const moduleName = generateNameVariants(dropFirst(package.split('-')));

        process.stdout.write(`(${i+1}/${arr.length}) Extracting package: "${package}"...`);

        pkgDocData = exportDefinitionDoc(package);

        process.stdout.write(` Done!\n`);
        if (pkgDocData.length > 0) {
            return Object.assign(aggregate, {
                [moduleName.kebabCase]: pkgDocData
            });
        } else {
            return aggregate;
        }

    }, {});

    return allDocData;
}