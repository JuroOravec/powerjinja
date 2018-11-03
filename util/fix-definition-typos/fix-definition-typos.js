const fs = require('fs');

const assertPackageName = require('../lib/assert-package-name');
const generateNameVariants = require('../lib/generate-name-variants');
const getPackageDefinitions = require('../lib/get-package-definitions');

const corePackage = 'powerjinja-core';

module.exports = function fixDefinitionTypos(package) {
    assertPackageName(package);

    const packageName = generateNameVariants(package.split('-'));
    const defs = getPackageDefinitions(packageName.kebabCase);

    defs.forEach(def => {
        let defContent = fs.readFileSync(def.path).toString('utf8');
        defContent = defContent.replace(/"(\.\.\/)*core\/handle\-queue"/g, '"powerjinja-core/lib/definitions/handle-queue"');
        defContent = defContent.replace(/([^.])handle_queue/g, (match, capture) => capture + 'powerjinja.core.handle_queue');
        defContent = defContent.replace(/(\W)jinja/g, (match, capture) => capture + 'powerjinja');

        const interfacePath = corePackage === def.package.kebabCase ? '../' : `${corePackage}/lib/`;
        defContent = defContent.match(/export\s*const\s*(\w+)\s*=(\s|[\n\r])*`/) ? `import { Powerjinja } from "${interfacePath}interface/powerjinja";\n\n` + defContent : defContent;
        defContent = defContent.replace(/export\s*const\s*(\w+)\s*=(\s|[\n\r])*`/, (match, capture) => `export function ${capture}(config: Powerjinja["config"]) {\n  return \``);
        defContent = defContent.replace(/(`;)(?!(\s|[\n\r])*\})/, "`;\n}");
        defContent = defContent.replace(/(`;)(\s|[\n\r])*\}(\s|[\n\r])*\}/, "`;\n}");

        defContent = defContent.match(/import \{ Powerjinja \} from "\.\.\/interface\/powerjinja";/) && corePackage !== def.package.kebabCase ? defContent.replace(/import \{ Powerjinja \} from "\.\.\/interface\/powerjinja";/, `import { Powerjinja } from "${corePackage}/lib/interface/powerjinja";`) : defContent;

        fs.writeFileSync(def.path, defContent);
        console.log(`The definition ${def.camelCase} has been updated!`);
    });
}