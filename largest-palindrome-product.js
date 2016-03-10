/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
function largestPalindrome(a) {
  var palArray = []

  function reverseNum(x){
    return Number(x.toString().split("").reverse().join(""))
  }

  for (var i = (a/10);  i < a;  i++) {
    for (var j = (a/10); j < a; j++) {
      var k = i * j
      if (reverseNum(k) === k) {
        palArray.push(k)
      }
    }
  }

  for (var i = 0; i < palArray.length; i++) {
    var ans = Math.max.apply(0, palArray)
  }
  return ans
}

console.log(largestPalindrome(1000))
