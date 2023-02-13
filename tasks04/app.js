function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimante', 'Juste']
const cats = ['Murka', 'Rainius', 'Meilute', 'Bosas', 'Dickis']

//TASK 1
bitGirls.unshift('Nauseda')
// console.log(bitGirls)


//TASK 2
const bitCats = cats.map((c) => [c, rand(0, 1) ? 'storas' : 'normalus'])
console.log(bitCats)

//TASK 3

const catWeight = bitCats.map((cat) => cat[1]).reduce(function (
    count,
    currentValue
) {
    return (
        count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
        count
    );
},
{});
// console.log(catWeight)

//TASK 4
const sortedCats = bitCats.map((cat) => cat[0]).sort((a, b) => a[1] > b[1] ? 1 : -1)
// console.log(sortedCats)

//TASK 5

const happyCats = [...Array(bitGirls.length)].map((el, index) => index == 0 ? el=[bitGirls[index], "Barsukas"]: el=[bitGirls[index-1], bitCats[index-1][0]])
console.log(happyCats)

