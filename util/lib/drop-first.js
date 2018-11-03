module.exports = function dropFirst(arr) {
    const copy = arr.slice();
    copy.shift();
    return copy;
}