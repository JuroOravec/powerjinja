export function variableNameReplacer(definition, origVarName, internalVarName) {
  const definingBit = definition.match(
    /{%-?\s*(?:set|macro)\s*(?:\w|_)+\s*(?:=.*%}|(?:.|[\r\n])*?{%-?\s*(?:endset|endmacro)\s*-?%})/
  )[0];

  if (definingBit) {
    const modifiedBit = definingBit.replace(origVarName, internalVarName);
    return definition.replace(definingBit, modifiedBit);
  } else {
    return definition;
  }
}
