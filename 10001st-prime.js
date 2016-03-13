/*
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
var start = new Date().getTime()

function nThPrimeNumber(n) {
  var primesArr = []

  for (var possiblePrime = 2; primesArr.length < n; possiblePrime++) {
    var isPrime = true
    for (var i = 2; i <= Math.sqrt(possiblePrime); i++) {
      if (possiblePrime % i === 0) {
        isPrime = false
      }
    }
    if (isPrime) {
      primesArr.push(possiblePrime)
    }
  }

  return primesArr[primesArr.length - 1]
}

console.log(nThPrimeNumber(10001))

var end = new Date().getTime()
console.log("Finished in " + ((end - start)/1000) + " seconds")
