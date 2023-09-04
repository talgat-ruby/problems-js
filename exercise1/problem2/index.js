function intWithinBounds(x, n1, n2) {
    if (x === parseInt(x) && x > n1 && x < n2) {
        return true;
    }
    return false;
}
console.log(intWithinBounds(3, 1, 9)) // true
console.log(intWithinBounds(6, 1, 6)) // false
console.log(intWithinBounds(4.5, 3, 8)) // false

module.exports = intWithinBounds;
