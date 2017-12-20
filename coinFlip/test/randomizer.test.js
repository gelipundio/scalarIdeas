const {expect} = require('chai')
const {randomNumber} = require('../randomizer')

describe('randomNumber()', () => {
  it('should throw an error if "n" less than 0', () => {
    expect(() => randomNumber(0)).to.throw(/invalid/)
  })

  it('should throw an error if "n" is greater than 1,000,000', () => {
    expect(() => randomNumber(1000000)).to.throw()
  })

  it('should be following the basic rules', () => {
	let result = randomNumber(500)
	expect(500).to.be.greaterThan(result)
	result = randomNumber(1)
	expect(1).to.be.greaterThan(result)
	result = randomNumber(500)
	expect(500).to.be.greaterThan(result)
  })

  it('lets test it many times against the same number', () => {
	  for(let x = 1; x <= 500; x++){
		expect(200).to.be.greaterThan(randomNumber(200))
	  }
  })
})
