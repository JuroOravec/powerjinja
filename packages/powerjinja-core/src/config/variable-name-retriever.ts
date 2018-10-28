export function variableNameRetriever(definition) {
  return definition.match(
    /{%-?\s*(?:set|macro)\s*((?:\w|_)+)\s*(?:=.*%}|(?:.|[\r\n])*?{%-?\s*(?:endset|endmacro)\s*-?%})/
  )[1];
}
