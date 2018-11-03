const fs = require('fs');
const path = require('path');

const extractAllDefinitionDoc = require('./extract-all-definition-doc.js');
const generateNameVariants = require('./lib/generate-name-variants');

const extractedDocData = extractAllDefinitionDoc();

debugger;
const docDataTree = Object.keys(extractedDocData).reduce((tree, moduleName) => {
    const moduleDocDataTree = extractedDocData[moduleName].reduce((docTree, docEntry) => {
        const targetDocNode = docEntry.subpath.dotCase.split('.')
            .filter(pathUnit => pathUnit)
            .reduce((docNode, pathUnit, i, arr) => {
                if (!docNode.children[pathUnit]) {
                    const subpathArr = arr.slice();
                    subpathArr.length = subpathArr.indexOf(pathUnit) + 1;
                    const subpathName = generateNameVariants(subpathArr);
                    docNode.children[pathUnit] = createDocNode({
                        subpath: subpathName,
                        module: docEntry.module,
                        subgroup: generateNameVariants(pathUnit.split('-'))
                    });
                }
                return docNode.children[pathUnit];
            }, docTree);
        targetDocNode.api.push(docEntry);
        return docTree;

    }, createDocNode({
        module: generateNameVariants(moduleName.split('-'))
    }));

    tree[moduleName] = moduleDocDataTree;
    return tree;
}, {});

const outFile = process.argv[2] || 'definition-doc.json';

const docData = JSON.stringify(docDataTree);
fs.writeFileSync(path.resolve(outFile), docData);


function createDocNode(obj) {
    return Object.assign({
        children: {},
        api: []
    }, obj);
}