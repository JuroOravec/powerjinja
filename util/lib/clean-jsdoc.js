module.exports = function cleanJsdoc(s) {
    const jsdocMatch = s.match(/\/\*\*([\s\n]|.)*?\*\//g) || [''];
    return jsdocMatch[0].replace(/(\/\*\*|\s\*\s|\*\/)/g, '').trim();
}