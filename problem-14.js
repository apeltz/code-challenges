/*  The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

    Using the rule above and starting with 13, we generate the following sequence:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
    It can be seen that this sequence (starting at 13 and finishing at 1) contains
    10 terms. Although it has not been proved yet (Collatz Problem), it is thought
    that all starting numbers finish at 1.

    Which starting number, under one million, produces the longest chain?

    NOTE: Once the chain starts the terms are allowed to go above one million.
 */

/* NOTE: This seems like a perfect use-case for ES6 generator functions,
         consider refactoring to use
 */
// function collatzSequence(int) {
//     var terms = 1
//     while (int !== 1) {
//         terms++
//         int = int & 1 ? 3 * int + 1 : int / 2
//     }
//     return terms
// }

function maxCollatz(max) {
  // store for memoizing previously checked integers
  var prevChecked = {};
  // assumes that param 'max' will be a positive integer greater than 0
  var maxNum = 1;
  var maxTerms = 1;
  for(var i=1; i<=max; i++){
    var currentNum = i;
    var currentTerms = 1;
    while (currentNum !== 1) {
        // check the cache for previously checked integers and add terms if found
        if(prevChecked[currentNum]) {
          currentTerms += prevChecked[currentNum]
          break
        }
        // else increment terms and continue to mutate integer according to pattern
        currentTerms++
        currentNum = currentNum & 1 ? 3 * currentNum + 1 : currentNum / 2
    }
    prevChecked[i] = currentTerms
    if(currentTerms >= maxTerms){
      maxNum = i;
      maxTerms = currentTerms;
    }
  }
  console.log('maxNum: ', maxNum, 'maxTerms: ', maxTerms)
  return maxNum
}
console.log(maxCollatz(1000000))
