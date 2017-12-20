const {flip} = require('./coin')

module.exports.randomNumber = function randomNumber (n) {
  if (n <= 0 || n >= 1000000) throw new Error('invalid input')
  const length = parseInt(n, 10).toString(2).length
  let newBinary = ''
  for (let x = 0; x <= length - 1; x++) newBinary += `${flip() ? 1 : 0}`
  const newNumber = parseInt(newBinary, 2).toString(10)
  return (newNumber >= 0 && newNumber < n) ? parseInt(newNumber) : randomNumber(n)
}
