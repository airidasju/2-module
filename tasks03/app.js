function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//TASK 1
const raceLaps = 10

const lapCounter = () => {
    for(let i = 0; i < raceLaps; i++) {
    console.log(raceLaps-i)
  }
}
// lapCounter()

//TASK 2
const avgSpeed = () => {
  const speedEachLap = []
  for(let i = 0; i < 10; i++) {
    speedEachLap.push(rand(120, 220))
  }
  const lapsAvg = speedEachLap.reduce((acc, curr) => acc + curr)/10
  console.log("The racer was averaging",lapsAvg,"km/h")
  return lapsAvg
}
// avgSpeed()


//TASK 3
const fuelCounter = () => {
  let fuelRemaining = 44
  for(let i = 1; i <= 10; i ++) {
    const fuelCost = rand(3, 6)
    fuelRemaining = fuelRemaining - fuelCost
    if(fuelRemaining < 0) {
      console.log("Not enough fuel to finish the lap",i,"\nWe currently have",fuelRemaining+fuelCost,"litres", 'and we need', fuelCost, '\n\nWe are short on', Math.abs(fuelRemaining),'liter')
      return fuelRemaining+fuelCost
    }
  }
  console.log("There was enough fuel for the race", fuelRemaining,"litres remaining")
  return fuelRemaining
}
// fuelCounter()


//TASK 4

const fastestTurn = () => {
  const turns = []
  const turnInfo =[]
  for(let i = 0; i < 10; i++) {
    for(let t = 0; t < 5; t++) {
      const randomTurn = rand(20, 120)
      if (turns.length == 0) {
        turns.push(randomTurn)
        turnInfo.push(["Lap",i+1,"Turn",t+1,"Speed", randomTurn])
      }
      // console.log(randomTurn, turns[turns. length - 1])
        if(randomTurn >  turns[turns. length - 1]) {
          turns.push(randomTurn)
          turnInfo.push(["lap",i+1,"turn",t+1,"speed", randomTurn])
        }
        // console.log("lap",i+1,"\n","turn",t+1,"\n","speed", randomTurn)
      }
    }
    console.log(`The fastest turn happened on lap ${turnInfo[turnInfo. length - 1][1]} turn ${turnInfo[turnInfo. length - 1][3]} with a speed of ${turns[turns. length - 1]} km/h`)
    return turns[turns. length - 1]
}
// fastestTurn()

const raceLength = 10;

const wholeRace = () => {
  let raceFuel = 44;
  const lapInfo = []
  for(let i = 0; i < raceLength; i++) {
      const speedThisLap = rand(120, 220);
      const fuelNeed = rand(3, 6);
      raceFuel = raceFuel - fuelNeed;
    
  
    if(raceFuel >= 0) {

      lapInfo.push({
        lap: i+1,
        avgSpeed: speedThisLap,
        fuelRemaining: raceFuel,
        fuelLost: fuelNeed
      })
    } else if(fuelNeed > raceFuel) {
      console.log({
        lap: i+1,
        avgSpeed: speedThisLap,
        fuelRemaining: 0,
        fuelLost: raceFuel + fuelNeed,
        fuelMissing: lapInfo[lapInfo.length - 1].lap == 10 ? raceFuel : fuelNeed + ((raceLength - i - 1)*rand(3, 6))
      })
      console.log(lapInfo)
      return
    }
    
  }
  console.log(lapInfo)
}

wholeRace()