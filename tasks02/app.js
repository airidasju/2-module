const getRandomNum = (max, min) =>
  Math.floor(Math.random() * (max - min) + min);

//TASK 1
const diceRoll =
  (diceOne = getRandomNum(7, 1)) + (diceTwo = getRandomNum(7, 1)) > 8
    ? `Win! Dice one: ${diceOne} | Dice two: ${diceTwo}`
    : `Loss! Dice one: ${diceOne} | Dice two: ${diceTwo}`;
// console.log(diceRoll)
//If you roll more than 8 from two dice, you win.

//TASK 2
const cats = [
  {
    name: 'Rexas',
    weight: getRandomNum(7, 3),
  },
  {
    name: 'Boltas',
    weight: getRandomNum(7, 3),
  },
];


const compareCats = cats.reduce((acc, curr) =>
  acc.weight == curr.weight
    ? `${cats
        .map((el) => `${el.name} ${el.weight}kg\n`)
        .join('')}\nTheir weight is equal`
    : acc.weight < curr.weight
    ? `${cats.map((el) => `${el.name} ${el.weight}kg\n`).join('')}\n${
        acc.name
      } is lighter`
    : `${cats.map((el) => `${el.name} ${el.weight}kg\n`).join('')}\n${
        curr.name
      } is lighter`,
);
// console.log(cats);
// console.log(compareCats);


//TASK 3
const noahBoat = [
  { 
    type: 'cat',
    space: 15
  },
  { 
    type: 'cow',
    space: 15
  }
]

const animalsCame = [...Array(2)].map((el) => el = getRandomNum(31, 0))
const animalsFit = noahBoat.reduce((acc, curr, index) => curr.space >= animalsCame[index] ? acc : false, true)
const result = `${animalsCame[0]} cats came\n${animalsCame[1]} cows came\n\n${animalsFit ? "All of the animals fit in the boat" : "Animals do not fit on the boat"}`
// console.log(result)

//TASK 4
const diceToBuy = getRandomNum(7, 1)
const whatToBuy = (diceToBuy == 1 || diceToBuy == 5 ? `Buy a TV` : diceToBuy == 3 || diceToBuy == 4 ? `Buy a washing machine` : `Buy a refrigerator`)
// console.log(diceToBuy, whatToBuy)

//TASK 5