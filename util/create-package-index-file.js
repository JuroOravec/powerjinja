const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    throw Error('No package given!');
}

if (!fs.existsSync(path.resolve('packages/' + process.argv[2]))) {
    throw Error(`No package with name "${process.argv[2]}" found!`);
}

const imports = [];
const definitions = [];

const packageName = generateNameVariantsFromKebabCase(process.argv[2]);
const moduleNameWords = packageName.kebabCase.split('-');
moduleNameWords.shift();
const moduleName = generateNameVariantsFromKebabCase(moduleNameWords.join('-'));
const coreModuleName = generateNameVariantsFromKebabCase('powerjinja-core');

const rootPath = path.resolve('packages/' + packageName.kebabCase + '/src/definitions');

const dirsToCheck = [rootPath];
const defs = [];

while (dirsToCheck.length > 0) {
    let currPath = dirsToCheck[0];
    let currSubpath = currPath.replace(rootPath, '').split('/').filter(subp => subp).map(subp => generateNameVariantsFromKebabCase(subp));
    defs.push(
        ...fs.readdirSync(currPath)
        .map(filename => {
            if (!filename.includes('.')) {
                dirsToCheck.push(path.resolve(currPath + '/' + filename));
            } else {
                return filename.split('.')[0];
            }
        }).filter(filename => filename)
        .map(filename => {
            const nameVariants = generateNameVariantsFromKebabCase(filename);
            return Object.assign({
                subpath: currSubpath
            }, nameVariants);
        }));
    dirsToCheck.splice(dirsToCheck.indexOf(currPath), 1);
}

defs.forEach(def => {
    const importPathSubpath = def.subpath.length > 0 ? def.subpath.map(subp => subp.kebabCase).join('/') + '/' : '';
    const definitionPathSubpath = def.subpath.length > 0 ? def.subpath.map(subp => subp.snakeCase).join('.') + '.' : '';
    const definitionSubpathSuffix = def.subpath.length > 0 ? def.subpath.map(subp => subp.camelCase[0].toUpperCase() + subp.camelCase.substring(1)).join('') : '';
    const asStatement = def.subpath.length > 0 ? ' as ' + def.camelCase + definitionSubpathSuffix : '';


    imports.push(`import { ${def.camelCase}${asStatement} } from './definitions/${importPathSubpath}${def.kebabCase}'`);
    definitions.push(`${packageName.camelCase}.define('powerjinja.${moduleName.snakeCase}.${definitionPathSubpath}${def.snakeCase}', ${def.camelCase}${definitionSubpathSuffix});`);
});

let indexFile = `import { ${coreModuleName.camelCase} } from "${coreModuleName.kebabCase}";\n\n`;
indexFile += imports.join('\n');
indexFile += `\n\nexport const ${packageName.camelCase} = ${coreModuleName.camelCase};\n\n`;
indexFile += definitions.join('\n');

fs.writeFileSync(path.resolve('packages/' + packageName.kebabCase + '/src/index.ts'), indexFile);
console.log('The file has been saved!');


function generateNameVariantsFromKebabCase(s) {
    const camelCase = toCamelCase(s);
    const snakeCase = toSnakeCase(s);
    return {
        kebabCase: s,
        camelCase: camelCase,
        snakeCase: snakeCase
    };
}

function toCamelCase(s) {
    let camelCase = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '-') {
            i++;
            camelCase += s[i].toUpperCase();
        } else {
            camelCase += char;
        }
    }
    return camelCase;
}

function toSnakeCase(s) {
    return s.replace(/\-/g, '_');
}