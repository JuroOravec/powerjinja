import { init } from "inject-definition";

import { minifier } from "./config/minifier";
import { variableNameRetriever } from "./config/variable-name-retriever";
import { variableNameReplacer } from "./config/variable-name-replacer";
import { declarationFormatter } from "./config/declaration-formatter";

export function createInstance(definitions?: object) {
  init({
    definitions,
    minifier,
    variableNameReplacer,
    variableNameRetriever,
    declarationFormatter
  });
}
