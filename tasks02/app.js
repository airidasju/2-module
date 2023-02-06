//TASK 1
const diceRoll = (( diceOne = Math.floor(Math.random() * (7 - 1) + 1)) +  (diceTwo = Math.floor(Math.random() * (7 - 1) + 1))) > 8 ? `Win! Dice one: ${diceOne} | Dice two: ${diceTwo}` : `Loss! Dice one: ${diceOne} | Dice two: ${diceTwo}`
// console.log(diceRoll)
//If you roll more than 8 from two dice, you win.


//TASK 2