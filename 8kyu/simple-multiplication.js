// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution
function simpleMultiplication(number) {
    if(number % 2 === 0) {
      return number * 8
    } 
    return number * 9
}