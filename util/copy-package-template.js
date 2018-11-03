const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');

const assertPackageName = require('./lib/assert-package-name');

module.exports = function copyPackageTemplate(packageName) {
    assertPackageName(packageName);

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