export function minifier(str) {
  const closeChars = "} # %".split(" ");
  const openChars = "{ # %".split(" ");
  const operands = "= ~ | ] [ : , > < + - * /".split(" ");

  let stringLiteral = false;
  let insideStatement = false;
  let minifiedtext = "";

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "[":
      case ":":
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
      case "<":
      case ">":
      case "|":
      case "~":
      case ",":
        if (!stringLiteral && insideStatement) {
          minifiedtext += str[i];

          while (/\s/.test(str[i + 1])) {
            i++;
          }
        }
        break;

      case " ":
      case "\t":
        if (!insideStatement) break;
        if (stringLiteral) {
          minifiedtext += str[i];
          break;
        }

        while (/\s/.test(str[i + 1])) {
          i++;
        }

        if (operands.includes(str[i + 1])) {
          break;
        }

        if (
          str[i + 1] === "-" &&
          closeChars.includes(str[i + 2]) &&
          str[i + 3] === "}"
        ) {
          i++;
          minifiedtext += str[i++];
          minifiedtext += str[i++];
          minifiedtext += str[i];
          insideStatement = false;
          break;
        } else if (closeChars.includes(str[i + 1]) && str[i + 2] === "}") {
          i++;
          minifiedtext += str[i++];
          minifiedtext += str[i];
          insideStatement = false;
          break;
        }
        minifiedtext += str[i];
        break;

      case "\\":
        if (!insideStatement) break;

        minifiedtext += str[i++];
        minifiedtext += str[i];
        break;

      case '"':
      case "'":
        if (stringLiteral === false) {
          stringLiteral = str[i];
        } else if (stringLiteral === str[i]) {
          stringLiteral = false;
        }

        if (insideStatement) {
          minifiedtext += str[i];
        }
        break;

      case "}":
      case "%":
      case "#":
        if (!insideStatement) break;
        if (stringLiteral) {
          minifiedtext += str[i];
          break;
        }

        if (str[i + 1] === "}") {
          insideStatement = false;
          minifiedtext += str[i++];
          minifiedtext += str[i];
          break;
        }
        minifiedtext += str[i];
        break;

      case "{":
        if (insideStatement) {
          minifiedtext += str[i];
          break;
        }

        if (stringLiteral) {
          break;
        }

        if (openChars.includes(str[i + 1])) {
          insideStatement = true;
          minifiedtext += str[i++];
          minifiedtext += str[i];

          if (str[i + 1] === "-") i++;

          while (/\s/.test(str[i + 1])) {
            i++;
          }
          break;
        }
        break;

      default:
        if (insideStatement) minifiedtext += str[i];
    }
  }

  return minifiedtext;
}
