const fs = require('fs');
const path = require('path');

const assertPackageName = require('../lib/assert-package-name');
const generateNameVariants = require('../lib/generate-name-variants');

module.exports = function createIndex(package) {

    assertPackageName(package);

    const packageName = generateNameVariants(package.split('-'));

    let file = `import { initialize as _initialize } from "./powerjinja/initialize";\n\n`;
    file += `export const initialize = _initialize;\n\n`;
    file += `export const ${packageName.camelCase} = _initialize();\n`;


    fs.writeFileSync(path.resolve('packages/' + packageName.kebabCase + '/src/index.ts'), file);
    console.log('The file has been saved!');
}