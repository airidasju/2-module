
//TASK 1

const arr1 = [...Array(30)].map(_ => Math.floor(Math.random() * (25 - 5) + 5))
console.log(arr1)
// console.log("TASK 1: generate 30 random numbers(5-25) to an array  ",arr1)

//TASK 2a
const aboveTen = arr1.reduce(
    (accumulator, n) => accumulator + (n > 10 ? 1 : 0),
    0
  );
// console.log("How many numbers are above ten?", aboveTen)

//TASK 2b
const highestNum = arr1.reduce((a, b) => Math.max(a, b))
// console.log("Highest number of the array is: ", highestNum)

//TASK 2c
const sumOfEven = arr1.reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0))
// console.log("Sum of every even array element: ", sumOfEven)

//TASK 2d
const arr1Changed = arr1.map((curr, index) => curr - index)
// console.log("Every element from arr1 minus its index (arr[1] - 1)", arr1Changed)

