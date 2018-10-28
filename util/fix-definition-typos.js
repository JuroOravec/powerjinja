const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    throw Error('No package given!');
}

if (!fs.existsSync(path.resolve('packages/' + process.argv[2]))) {
    throw Error(`No package with name "${process.argv[2]}" found!`);
}

const definitions = [];

const pkg = process.argv[2];
const moduleNameWords = pkg.split('-');
moduleNameWords.shift();
const moduleName = generateNameVariantsFromKebabCase(moduleNameWords.join('-'));

const rootPath = path.resolve('packages/' + pkg + '/src/definitions');

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
            const nameVariants = generateNameVariantsFromKebabCase(file);
            return Object.assign({
                path: path.resolve(currPath + '/' + filename)
            }, nameVariants);
        }));
    dirsToCheck.splice(dirsToCheck.indexOf(currPath), 1);
}

defs.forEach(def => {
    let defContent = fs.readFileSync(def.path).toString('utf8');
    defContent = defContent.replace(/"(\.\.\/)*core\/handle\-queue"/g, '"powerjinja-core/lib/definitions/handle-queue"');
    defContent = defContent.replace(/([^.])handle_queue/g, (match, capture) => capture + 'powerjinja.core.handle_queue');
    defContent = defContent.replace(/(\W)jinja/g, (match, capture) => capture + 'powerjinja');
    fs.writeFileSync(def.path, defContent);
    console.log(`The definition ${def.camelCase} has been updated!`);
});


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