const toCamelCase = require('./to-camel-case');
const toSnakeCase = require('./to-snake-case');
const toKebabCase = require('./to-kebab-case');
const toDotCase = require('./to-dot-case');
const toTitleCase = require('./to-title-case');

module.exports = function generateNameVariants(arr) {
    const camelCase = toCamelCase(arr);
    const snakeCase = toSnakeCase(arr);
    const kebabCase = toKebabCase(arr);
    const dotCase = toDotCase(arr);
    const titleCase = toTitleCase(arr);
    return {
        kebabCase,
        camelCase,
        snakeCase,
        dotCase,
        titleCase
    };
}