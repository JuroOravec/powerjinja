module.exports = function toTitleCase(arr) {
    return arr.map((word, i) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}