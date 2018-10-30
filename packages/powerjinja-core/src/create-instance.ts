import { init } from "inject-definition";
import { DefinitionInjector } from "inject-definition/lib/interface";

import { minifier } from "./config/minifier";
import { variableNameRetriever } from "./config/variable-name-retriever";
import { variableNameReplacer } from "./config/variable-name-replacer";
import { declarationFormatter } from "./config/declaration-formatter";

export function createInstance(definitions?: DefinitionInjector.IDefinition) {
  const instance = init({
    definitions,
    minifier,
    variableNameReplacer,
    variableNameRetriever,
    declarationFormatter
  });
  (instance as any).compile = function(text: string, opt) {
    let options = Object.assign({ reference: true }, opt);
    instance.inject(text, options);
  };

  return instance;
}
