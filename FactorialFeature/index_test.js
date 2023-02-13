var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
   describe('.factorial', () => {
//step 1
   it('returns correct value of 5!', () => {
// step 2 
// step 4 REFACTOR

   // steup
   const inputNumber = 5;
   const expectedResult = 120;

   // exercise
   const result = Calculate.factorial(inputNumber);

   // verify
      assert.equal(result, expectedResult);
   })

   it('returns correct value of 3!', () => {
// step 2 
// step 4 REFACTOR

   // steup
   const inputNumber = 3;
   const expectedResult = 6;

   // exercise
   const result = Calculate.factorial(inputNumber);

   // verify
      assert.equal(result, expectedResult);
   })

   it('returns correct value of 0!', () => {

      // Setup
      const inputNumber = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
   })
   });
});