module.exports = function toCamelCase(arr) {
    return arr.map((word, i) => {
        if (i === 0) {
            return word;
        }
        return word[0].toUpperCase() + word.substring(1);
    }).join('');
}