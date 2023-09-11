function numbersSum(arr) {
  let x = 0
  for (i = 0; i < arr.length; i++){
      if (typeof arr[i] === "number") {
          x += arr[i]
      }
  }
  return x
}
console.log(numbersSum([1, 2, "13", "4", "645"])) // 3
console.log(numbersSum([true, false, "123", "75"])) // 0
console.log(numbersSum([1, 2, 3, 4, 5, true])) // 15

module.exports = numbersSum;
