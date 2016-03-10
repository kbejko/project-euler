/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


// var n = 600851475143

function largestPrimeFactor(n){

  for (var i = 2; i <= n; ) {
    if (n % i === 0) {
      n /= i
    } else {
      i += 1
    }
  }

  return i
}
