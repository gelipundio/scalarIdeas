const {randomNumber} = require('./randomizer')

console.log(500, '-', randomNumber(500))// returns 123
console.log(1, '-', randomNumber(1))// returns 0
console.log(2, '-', randomNumber(2))// returns 0
console.log(3, '-', randomNumber(3))// returns 0
console.log(500, '-', randomNumber(500))// returns 466
// randomNumber(1000001) // throw error
