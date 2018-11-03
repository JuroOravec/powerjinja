const fs = require('fs');

const assertPackageName = require('./lib/assert-package-name');
const dropFirst = require('./lib/drop-first');
const getPackageDefinitions = require('./lib/get-package-definitions');
const generateNameVariants = require('./lib/generate-name-variants');
const cleanJsdoc = require('./lib/clean-jsdoc');


module.exports = function extractDefinitionDoc(pkg) {
    assertPackageName(pkg);

    const packageName = generateNameVariants(pkg.split('-'));
    const moduleName = generateNameVariants(dropFirst(packageName.kebabCase.split('-')));
    const defs = getPackageDefinitions(packageName.kebabCase);

    const docData = defs.map(def => {
        const defContent = fs.readFileSync(def.path).toString('utf8');
        const jsdoc = cleanJsdoc(defContent);

        let currMode = 'desc';
        const docAttributes = jsdoc.split(/\n(?=\@\w+)/).map((line, i, arr) => {

            if (line[0] === '@') {
                currMode = line.match(/\@\w+/)[0].substring(1);
            }

            let attr;
            const words = line.split(' ');

            switch (currMode) {
                case 'param':
                    const paramName = words.length > 2 ? words[2] : '';
                    const paramType = words.length > 1 ? words[1].replace(/(\{|\})/g, '') : '';
                    const paramDesc = words.length > 3 ? words.slice(3).join(' ') : '';
                    attr = {
                        param: {
                            name: paramName,
                            type: paramType,
                            desc: paramDesc
                        }
                    };
                    break;
                case 'returns':
                    const returnType = words.length > 1 ? words[1].replace(/(\{|\})/g, '') : '';
                    const returnDesc = words.length > 3 ? words.slice(3).join(' ') : '';
                    attr = {
                        returns: {
                            type: returnType,
                            desc: returnDesc
                        }
                    }
                    break;
                case 'example':
                    let example = line.split(/example[\s\n]/, 2);
                    example = example.length > 1 ? example[1] : "";
                    attr = {
                        example: {
                            desc: example
                        }
                    }
                    break;
                case 'desc':
                    const desc = line[0] === '@' ? line.replace(/\@\w+(\s|\n)/, '') : line;
                    attr = {
                        desc: {
                            desc
                        }
                    }
                    break;
                case 'ignore':
                    attr = {
                        ignore: true
                    }
                    break;
            }

            return attr;

        }).reduce((aggregate, item, i, arr) => {
            const attr = Object.keys(item)[0];
            if (!aggregate[attr]) {
                aggregate[attr] = [];
            }
            aggregate[attr].push(item[attr]);
            return aggregate;
        }, {
            name: {
                camelCase: def.camelCase,
                kebabCase: def.kebabCase,
                snakeCase: def.snakeCase,
                dotCase: def.dotCase
            },
            path: def.path,
            subpath: def.subpath,
            package: packageName,
            module: moduleName
        });

        // console.log(docAttributes)

        // fs.writeFileSync(def.path, defContent);
        // console.log(`The definition ${def.camelCase} has been updated!`);

        return docAttributes;

    }).filter(docEntry => !docEntry.ignore);
    return docData;
}