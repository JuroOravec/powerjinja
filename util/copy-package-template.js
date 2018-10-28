const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');

module.exports = function copyPackageTemplate(packageName) {
    if (!packageName) {
        throw Error('No package given!');
    }

    if (!fs.existsSync(path.resolve('package-template'))) {
        throw Error('Cannot find package template!');
    }

    const packagePath = path.resolve('packages/' + packageName);
    const packageJsonPath = path.resolve(packagePath + '/package.json');
    const readmePath = path.resolve(packagePath + '/README.md');

    fs.mkdirSync(packagePath);
    fsExtra.copySync(path.resolve('package-template'), packagePath);

    const packageJsonContent = fs.readFileSync(packageJsonPath).toString('utf8');
    const modifiedPackageJsonContent = packageJsonContent.replace(`"name": ""`, `"name": "${packageName}"`);
    fs.writeFileSync(packageJsonPath, modifiedPackageJsonContent);
    console.log('package.json has been updated!');

    const readmeContent = fs.readFileSync(readmePath).toString('utf8');
    const modifiedReadmeContent = readmeContent.replace(`powerjinja-template`, `${packageName}`);
    fs.writeFileSync(readmePath, modifiedReadmeContent);
    console.log('README.md has been updated!');


}