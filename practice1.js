// SUM EVENS ONLY: Write a function sumEvensOnly that, given a starting and ending number, returns the sum of the range of numbers between the given starting and ending numbers.

// function sumEvensOnly(startNum, endNum){
//   var sum = 0;
  
//   for (var i = startNum; i < endNum; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }  

// sumEvensOnly(1, 5);


// FIND LARGEST THREE DIGIT NUM: Write a function findLargestThreeDigitNum that, given a string of digits between 1 and 9, will return the largest three-digit number from the given string.

// function getLargestThreeDigitNum(digits) {
//   var maxNum = Number(digits.slice(0,3));
//   for (var i = 0; i < digits.length; i++) {
//     var nextNum = Number(digits.slice(i, i + 3));
    
//     if (nextNum > maxNum) {
//       maxNum = nextNum;
//     }
//   }

//   return maxNum;
// }

// getLargestThreeDigitNum('231998132')


// MAD LIBS: Write a function madLibs that, given a string and an array of words, replaces the asterisks in the string with a word from the words array.

// function madLibs(sentence, words) {
//   var sections = sentence.split('*');
//   var result = '';
//   var wordsLength = words.length;
  
//   for (var i = 0; i < sections.length - 1; i++) {
//     result += sections[i] + words[i % wordsLength];
//   }
//   return result;
// }


// madLibs('Marching is fun: *, *, *, *!', ['left', 'right']);


// IS PRIME: Write a function isPrime that, given a number num, returns true if the number is a prime number; otherwise returns false. A prime number is a number that is greater than 1 and is only divisible by itself and the number 1.


// function isPrime(num) {
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
// return num > 1;
// }

// isPrime(23);

//Recursion - NESTING: Write a function nestingBird that, given an array of characters and nested sub-arrays, concatenates the characters and returns the name of the bird in the nest.

// function nestingBird(chars) {
//   var bird = '';
  
//   for (var i = 0; i < chars.length; i++) {
//     var element = chars[i];
    
//     if (Array.isArray(element)) {
//       bird += nestingBird(element);
//     }
//     else {
//       bird += element;
//     }
//   }
  
//   return bird;
// }

// nestingBird(['r', 'o', ['b', ['i'], 'n']]); 