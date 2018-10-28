const fs = require('fs');
const path = require('path');

const pkg = 'powerjinja';

if (!fs.existsSync(path.resolve('packages/' + pkg))) {
    throw Error(`No package with name "${pkg}" found!`);
}

const imports = [];
const definitions = [];

fs.readdirSync(path.resolve('packages'))
    .filter(package => package !== pkg)
    .map(package => generateNameVariantsFromKebabCase(package))
    .forEach((package, i, arr) => {
        process.stdout.write(`(${i+1}/${arr.length}) Parsing package: "${package.kebabCase}"...`);
        imports.push(`import { ${package.camelCase} } from "${package.kebabCase}"`);
        definitions.push(`${package.camelCase}`);
        process.stdout.write(' Done!\n');
    });

let indexFile = `import { createInstance } from "powerjinja-core/src/create-instance";\n\n`;
indexFile += imports.join('\n');
indexFile += `\n\nconst definitions = [${definitions.join(', ')}];\n`;
indexFile += `
const definitionsObject = Object.assign(
    definitions.map(def => def.getAll({ select: "all", type: "full" }))
);
  
export const powerjinja = createInstance(definitionsObject);
`


fs.writeFileSync(path.resolve('packages/' + pkg + '/src/index.ts'), indexFile);
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