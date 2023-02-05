//TASK 1

const arr1 = [...Array(30)].map((_) =>
  Math.floor(Math.random() * (25 - 5) + 5),
);
// console.log(arr1);
// console.log("TASK 1: generate 30 random numbers(5-25) to an array  ",arr1)

//TASK 2a
const aboveTen = arr1.reduce(
  (accumulator, n) => accumulator + (n > 10 ? 1 : 0),
  0,
);
// console.log("How many numbers are above ten?", aboveTen)

//TASK 2b
const highestNum = arr1.reduce((a, b) => Math.max(a, b));
// console.log("Highest number of the array is: ", highestNum)

//TASK 2c
const sumOfEven = arr1.reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0));
// console.log("Sum of every even array element: ", sumOfEven)

//TASK 2d
const arr1minusIndex = arr1.map((curr, index) => curr - index);
// console.log("Every element from arr1 minus its index (arr[1] - 1)", arr1minusIndex)

//TASK 2e
const arr1plus10 = [...arr1, ...Array(10)].map((_) =>
  Math.floor(Math.random() * (25 - 5) + 5),
);
// console.log("10 more elements added to array)", arr1plus10)

//TASK 2f
const arr1divided = () => {
  arrEven = [];
  arrOdd = [];
  arr1.forEach((num, index) =>
    index % 2 === 0 ? arrEven.push(num) : arrOdd.push(num),
  );
  return arrOdd, arrEven;
};
// arr1divided()
// console.log("arr1 split into two, based on its indexes", arrEven, arrOdd)

//TASK 2g
const arr1equal0 = arr1.map((num, index) =>
  index % 2 === 0 && num > 15 ? (num = 0) : (num = num),
);
// console.log("All numbers that have a prime index and is more than 15)", arr1equal0)

//TASK 2h
const arr1under10 = arr1.findIndex((num) => num < 10);
// console.log("Index of first number thats less than 10", arr1under10)

//TASK 3
const arr200 = [...Array(200)]
  .map((_) => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)])
  .reduce((count, item) => ((count[item] = count[item] + 1 || 1), count), {});
// console.log("We create a new array of 200 elements(randomized A,B,C,D) then count how many of each letter got generated", arr200)

//TASK 4
const task4 = () => {
  let repeatingCombination = 0;
  let uniqueCombination = 0;

  const random200Array = () =>
    [...Array(200)].map(
      (_) => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
    );
  const random3array = [
    (firstRandom = random200Array()),
    (secondRandom = random200Array()),
    (thirdRandom = random200Array()),
  ];
  const tripletArr = firstRandom.map((arr, arrIndex) =>
    [firstRandom[arrIndex], secondRandom[arrIndex], thirdRandom[arrIndex]].join(
      '',
    ),
  );
  const findDuplicates = tripletArr.filter((el, index) =>
    tripletArr.indexOf(el) === index
      ? uniqueCombination++
      : repeatingCombination++,
  );
  console.log(tripletArr);
  console.log(
    `There is ${uniqueCombination} unique combinations and ${repeatingCombination} repeating combinations`,
  );
  return uniqueCombination, repeatingCombination;
};
// task4();


//TASK 5

const task5 = () => {
  arr1Random = []
  arr2Random = []
  const generateNewNum = () => parseInt(Math.random() * (1000 - 100) + 100)
  function createNewRandom(arr) {
    while (arr.length < 100) {
      const newNum = generateNewNum()
      if(arr.indexOf(newNum == -1))
        arr.push(newNum)
    }
  }
  createNewRandom(arr1Random)
  createNewRandom(arr2Random)
};
// Generates 2 arrays of 100 elements from 100 to 999. All elements are unique
task5()


//TASK 6
const arr6 = arr1Random.filter((el) => !arr2Random.includes(el))
// console.log("An array of values from arrRandom1 which do not include arr2Random values", arr6)

//TASK 7
const arr7 = arr1Random.filter((el) => arr2Random.includes(el))
// console.log("An array of values from that exist in arrRandom1 and arrRandom2", arr7)