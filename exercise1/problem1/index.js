function numOfDigits(int) {

    let count = 0
    if (int === 0) {
        return 1
    }
    while (int != 0) {
        n = Math.floor(int / 10)
        count++
    }
    return count
}
console.log(numOfDigits(1000)) // 4
console.log(numOfDigits(12)) // 2
console.log(numOfDigits(1305981031)) // 10
console.log(numOfDigits(0)) // 1  

 module.exports = numOfDigits;
