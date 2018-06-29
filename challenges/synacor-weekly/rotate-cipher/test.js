const expect = require('chai').expect;
const { getEncodedClockwise } = require('./index');

describe(`Rotate Cipher`, function() {

	it(`should return clockwise encoded strings`, function() {
		let testCases = [
			{
				message: `WE ARE DISCOVERED. FLEE AT ONCE`,
				dimensions: [9,3],
				direction: 'clockwise',
				expected: 'CEXXECNOTAEOWEAREDISLFDEREV'
			},
			{
				message: `For lunch let's have peanut-butter and bologna sandwiches`,
				dimensions: [4,12],
				direction: 'clockwise',
				expected: 'LHSENURBGAISEHCNNOATUPHLUFORCTVABEDOSWDALNTTEAEN'
			},
			{
				message: `I've even witnessed a grown man satisfy a camel`,
				dimensions: [9,5],
				direction: 'clockwise',
				expected: 'IGAMXXXXXXXLETRTIVEEVENWASACAYFSIONESSEDNAMNW'
			}
		]
		testCases.map(c => {
			expect(getEncodedClockwise(c.message, c.dimensions[0], c.dimensions[1], c.direction)).to.equal(c.expected);

		})
	})

})

