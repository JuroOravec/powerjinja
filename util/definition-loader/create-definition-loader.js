const fs = require('fs');
const path = require('path');

const assertPackageName = require('../lib/assert-package-name');
const dropFirst = require('../lib/drop-first');
const generateNameVariants = require('../lib/generate-name-variants');
const getPackageDefinitions = require('../lib/get-package-definitions');

const corePackage = 'powerjinja-core';
const instanceVar = 'powerjinja';
const interfaceVar = 'Powerjinja';

module.exports = function createDefinitionLoader(package) {

    assertPackageName(package);

    const packageName = generateNameVariants(package.split('-'));
    const moduleName = generateNameVariants(dropFirst(package.split('-')));

    const interfacePath = package === corePackage ? '../' : `${corePackage}/lib/`;

    const imports = [];
    const definitions = [];

    const defs = getPackageDefinitions(packageName.kebabCase);

    defs.forEach(def => {
        const importPathSubpath = def.subpath.snakeCase ? def.subpath.path.substring(1) + '/' : '';
        const definitionPathSubpath = def.subpath.snakeCase ? def.subpath.pathSteps.map(subp => subp.snakeCase).join('.') + '.' : '';
        const varSubpathSuffix = def.subpath.snakeCase ? def.subpath.pathSteps.map(subp => subp.camelCase[0].toUpperCase() + subp.camelCase.substring(1)).join('') : '';
        const asStatement = def.subpath.snakeCase ? ' as ' + def.camelCase + varSubpathSuffix : '';

        imports.push(`import { ${def.camelCase}${asStatement} } from '../definitions/${importPathSubpath}${def.kebabCase}'`);
        definitions.push(`  ${instanceVar}.define('powerjinja.${moduleName.snakeCase}.${definitionPathSubpath}${def.snakeCase}', ${def.camelCase}${varSubpathSuffix}(${instanceVar}.config));`);
    });

    let file = `import { ${interfaceVar} } from "${interfacePath}interface/powerjinja";\n\n`

    file += imports.join('\n') + '\n\n';
    file += `export function loadDefinitions(${instanceVar}: ${interfaceVar}) {\n`;
    file += definitions.join('\n') + '\n\n';
    file += `  return ${instanceVar};\n`;
    file += '}';

    fs.writeFileSync(path.resolve('packages/' + package + '/src/powerjinja/load-definitions.ts'), file);
    console.log('The file has been saved!');

}