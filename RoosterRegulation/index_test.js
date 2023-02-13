// step 1
const assert = require('assert');

//step 2
const Rooster = require('../index');

//step 3
describe('Rooster', () => {
// step 4
   describe('.announceDawn', () => {
// step 5
      it('returns a rooster call', () => {

// step 6
         // setup
         const expected = 'cock-a-doodle-doo!'; 

         //exercise
         const actual = Rooster.announceDawn();
         //verify
         assert.equal(actual, expected);
      });
   }); 
// step 8
   describe('.timeAtDawn', () => {

// step 9
      it('returns its argument as a string', () => {
         // setup
         const inputNumber = 11;
         const expected = '11';
         // exercise
         const actual = Rooster.timeAtDawn(inputNumber);
         //verify
         assert.equal(actual, expected);
      });
      it('throws a range error if passed a number less than 0', () => {
         // setup
         const inputNumber = -1;
         const expected = RangeError;

         //verify
         assert.throws(() => {
            Rooster.timeAtDawn(inputNumber);
         }, expected)
      });
      it('throws a range error if passed a number greater than 23', () => {
         // setup
         const inputNumber = 24;
         const expected = RangeError;

         //verify
         assert.throws(() => {
            Rooster.timeAtDawn(inputNumber);
         }, expected)
      });
   });
});