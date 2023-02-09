function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//TASK 1
const raceLaps = 10

const raceCounter = () => {
    for(let i = 0; i < raceLaps; i++) {
    console.log(raceLaps-i)
  }
}
// raceCounter()

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
avgSpeed()
