const fs = require('fs');
const path = require('path');

const assertPackageName = require('./lib/assert-package-name');
const generateNameVariants = require('./lib/generate-name-variants');

const pkg = 'powerjinja';
const corePackage = 'powerjinja-core';
const interfaceVar = 'Powerjinja';

assertPackageName(pkg);

const imports = [];
const definitionLoaders = [];

fs.readdirSync(path.resolve('packages'))
    .filter(package => package !== pkg)
    .map(package => generateNameVariants(package.split('-')))
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Parsing package: "${package.kebabCase}"...`);
        imports.push(`import { loadDefinitions as ${package.camelCase}LoadDefinitions } from "${package.kebabCase}/lib/powerjinja/load-definitions"`);
        definitionLoaders.push(`  ${package.camelCase}LoadDefinitions(powerjinja);`);
        process.stdout.write(' Done!\n');
    });

let file = `import { ${interfaceVar} } from "${corePackage}/lib/interface/powerjinja";\n\n`;
file += imports.join('\n') + '\n\n';
file += `export function loadModules(powerjinja: ${interfaceVar}){;\n`;
file += definitionLoaders.join('\n') + '\n';
file += '}';

fs.writeFileSync(path.resolve('packages/' + pkg + '/src/powerjinja/load-modules.ts'), file);
console.log('The file has been saved!');