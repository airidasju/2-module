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
console.log(cats);
console.log(compareCats);