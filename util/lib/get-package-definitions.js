const fs = require('fs');
const path = require('path');

const generateNameVariants = require('./generate-name-variants');

module.exports = function getPackageDefinitions(package) {
    const rootPath = path.resolve(`packages/${package}/src/definitions`);
    const dirsToCheck = [rootPath];
    const defs = [];

    while (dirsToCheck.length > 0) {
        let currPath = dirsToCheck[0];
        defs.push(
            ...fs.readdirSync(currPath)
            .map(filename => {
                if (!filename.includes('.')) {
                    dirsToCheck.push(path.resolve(currPath + '/' + filename));
                } else {
                    return filename;
                }
            }).filter(filename => filename)
            .map(filename => {
                const file = filename.split('.')[0];
                const nameVariants = generateNameVariants(file.split('-'));
                const subpathPath = currPath.replace(rootPath, '');
                const subpath = Object.assign({
                    path: subpathPath,
                    pathSteps: subpathPath.split('/').filter(subp => subp).map(subp => generateNameVariants(subp.split('-'))),
                }, generateNameVariants(subpathPath.split('/').filter(p => p)))
                return Object.assign({
                    path: path.resolve(currPath + '/' + filename),
                    subpath,
                    package: generateNameVariants(package.split('-'))
                }, nameVariants);
            }));
        dirsToCheck.splice(dirsToCheck.indexOf(currPath), 1);
    }
    return defs;
}