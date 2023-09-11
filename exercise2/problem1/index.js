function arrayOfMultiples(num, length) {
    let arr = []
    let x = 1
    for(i = 0; i < length; i++){
        arr.push(num * x)
        x++
    }
    return arr
}
console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]

module.exports = arrayOfMultiples;
