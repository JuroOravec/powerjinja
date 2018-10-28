export function declarationFormatter(key, value) {
  let parsedObject = "";

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    switch (char) {
      case "{":
        parsedObject += char + '"';
        continue;
      case ":":
        parsedObject += '"' + char;
        continue;
      case ",":
        parsedObject += char + '"';
        continue;
      default:
        parsedObject += char;
    }
  }
  return `{%- set ${key} = ${parsedObject} -%}`;
}
