/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(num) {
  var smallestNumFound = false
  var smallestNum = 1
  var ans

  while (smallestNumFound === false) {

    for (var i = 1; i < num; i++) {
      if (smallestNum % i !== 0) {
        break
      }
    }

    if (smallestNum % i === 0) {
      smallestNumFound = true
      ans = smallestNum
    }

    smallestNum += 1
  }

  return ans
}

console.log(smallestMultiple(20))
