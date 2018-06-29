const expect = require('chai').expect;
const { getEncodedClockWiseNeat } = require('./index');


// Challenge Inputs
// "WE ARE DISCOVERED. FLEE AT ONCE" (9, 3) clockwise
// "why is this professor so boring omg" (6, 5) counter-clockwise
// "Solving challenges on r/dailyprogrammer is so much fun!!" (8, 6) counter-clockwise
// "For lunch let's have peanut-butter and bologna sandwiches" (4, 12) clockwise
// "I've even witnessed a grown man satisfy a camel" (9,5) clockwise
// "Why does it say paper jam when there is no paper jam?" (3, 14) counter-clockwise
// Challenge Outputs
// "TSIYHWHFSNGOMGXIRORPSIEOBOROSS"
// "CGNIVLOSHSYMUCHFUNXXMMLEGNELLAOPERISSOAIADRNROGR"
// "LHSENURBGAISEHCNNOATUPHLUFORCTVABEDOSWDALNTTEAEN"
// "IGAMXXXXXXXLETRTIVEEVENWASACAYFSIONESSEDNAMNW"
// "YHWDSSPEAHTRSPEAMXJPOIENWJPYTEOIAARMEHENAR"

describe(`Rotate Cipher - Clockwise`, function() {
    
    it(`should return clockwise encoded strings`, function() {
        let testCases = [
            {
                message: `WE ARE DISCOVERED. FLEE AT ONCE`,
                dimensions: [9,3],
                expected: 'CEXXECNOTAEOWEAREDISLFDEREV'
            },
            {
                message: `For lunch let's have peanut-butter and bologna sandwiches`,
                dimensions: [4,12],
                expected: 'LHSENURBGAISEHCNNOATUPHLUFORCTVABEDOSWDALNTTEAEN'
            }
        ]
        testCases.map(c => {
            expect(getEncodedClockWiseNeat(c.message, c.dimensions[0], c.dimensions[1])).to.equal(c.expected);

        })
    })

})

