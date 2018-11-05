const fs = require('fs');
const path = require('path');

const assertPackageName = require('../lib/assert-package-name');
const generateNameVariants = require('../lib/generate-name-variants');

const corePackage = 'powerjinja-core';
const mainPackage = 'powerjinja';

module.exports = function createInitialize(package) {

    assertPackageName(package);

    const corePkgName = generateNameVariants(corePackage.split('-'));

    const loader = package === mainPackage ? 'loadModules' : 'loadDefinitions';
    const loaderPath = package === mainPackage ? 'load-modules' : 'load-definitions';
    const interfacePath = package === corePackage ? '../' : `${corePackage}/lib/`;
    const instantiationFnName = package === corePackage ? 'instantiate' : `initialize${corePkgName.titleCase.replace(/\s/g, '')}`;
    const instantiationParams = package === corePackage ? 'undefined, config' : 'config';

    let file = '';
    if (package === corePackage) {
        file += `import { instantiate } from "./instantiate";\n`;
    } else {
        file += `import { initialize as initialize${corePkgName.titleCase.replace(/\s/g, '')} } from "${corePkgName.kebabCase}";\n`
    }

    file += `import { ${loader} } from "./${loaderPath}";\n`
    file += `import { Powerjinja } from "${interfacePath}interface/powerjinja";\n\n`
    file += `export function initialize(config?: Powerjinja["config"]) {\n`;
    file += `  const powerjinja = ${instantiationFnName}(${instantiationParams});\n`
    file += `  ${loader}(powerjinja);\n`;
    file += `  return powerjinja;\n`;
    file += `}\n`;

    fs.writeFileSync(path.resolve('packages/' + package + '/src/powerjinja/initialize.ts'), file);
    console.log('The file has been saved!');
}