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
    fuelRemaining = fuelRemaining - rand(3, 6)
    if(fuelRemaining < 3 && fuelRemaining < 0) {
      console.log("Not enough fuel to finish the lap",i,"\n", fuelRemaining,"litres remaining")
      return fuelRemaining
    }
    console.log(fuelRemaining, "after lap",i)
  }
  console.log("There was enough fuel for the race", fuelRemaining,"litres remaining")
  return fuelRemaining
}
fuelCounter()
