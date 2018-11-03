import { init } from "inject-definition";
import { DefinitionInjector } from "inject-definition/lib/interface";

import { Powerjinja } from "../interface/powerjinja";

import { minifier } from "../config/minifier";
import { variableNameRetriever } from "../config/variable-name-retriever";
import { variableNameReplacer } from "../config/variable-name-replacer";
import { declarationFormatter } from "../config/declaration-formatter";
import { defaultSyntax } from "../config/defaultSyntax";

export function instantiate(
  definitions?: DefinitionInjector.IDefinition,
  config: Powerjinja["config"] = {}
): Powerjinja {
  const instance: Powerjinja = init({
    definitions,
    minifier,
    variableNameReplacer,
    variableNameRetriever,
    declarationFormatter
  });
  instance.compile = function(
    text: string,
    opt: {
      delimeter?: string;
      minify?: boolean;
      separator?: string;
    } = {}
  ) {
    let options = {
      reference: true,
      delimeter: opt.delimeter,
      minify: opt.minify,
      separator: opt.separator
    };
    return instance.inject(text, options);
  };

  // Assign custom config values
  instance.config = defaultSyntax();
  assignPropertiesRecursively(instance.config, config);

  function assignPropertiesRecursively(toObj, fromObj = {}) {
    Object.keys(toObj || {})
      .filter(key => toObj[key] !== undefined && fromObj[key] !== undefined)
      .forEach(key => {
        if (typeof toObj[key] === "object") {
          assignPropertiesRecursively(toObj[key], fromObj[key]);
        } else if (fromObj) toObj[key] = fromObj[key];
      });
    return toObj;
  }

  return instance;
}
