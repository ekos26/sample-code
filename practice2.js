//digitsBeGone: Write a function digitsBeGone that, given a string, returns a new string with all of the digits filtered out. Digits are the characters '0', '1', '2', '3', '4', '5', '6', '7', '8', and '9'.

// function digitsBeGone(string) {
//   var numbers = '1234567890';
//   var filteredString = '';
  
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];
    
//     if (numbers.indexOf(char) === -1) {
//       filteredString += char;
//     }
//   }
//   return filteredString;
// }

// digitsBeGone('abc123def'); // => 'abcdef'



//myIndexOf: Write a function myIndexOf that, given a string and a search term, returns the index of the search term if it exists in the given string, or -1 if it does not.

// function myIndexOf(str, searchTerm) {
//   for (i = 0; i < str.length; i++) {
//     var substring = str.substring(i, i + searchTerm.length); 
//     if (substring === searchTerm) {
//       return i;
//     }
//   }
//   return -1;
// }

// myIndexOf('balloons are fun', 'fun'); // => 13


// Write a function gps that, given an array of directions, returns an array of coordinates that represent the final location of the user. Assume the starting coordinates are [0, 0]. The 'x' coordinate (at the 0th index) is incremented by the 'east' direction; it is decremented by the 'west' direction. The 'y' coordinate (at the 1st index) is incremented by the 'north' direction; it is decremented by the 'south' direction.

// position starts at [0, 0]
// 'east' direction increments the value at the 0th index by one: [1, 0]
// 'east' direction increments the value at the 0th index by one: [2, 0]
// 'south' direction decrements the value at the 1st index by one: [1, -1]
// 'west' direction decrements the value at the 0th index by one: [1, -1]
// 'north' direction increments the value at the 1st index by one: [1, 0]

// function gps(arr) {
//   var finalCoordinate = [0,0];
  
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 'east') finalCoordinate[0] += 1;
//     if (arr[i] === 'west') finalCoordinate[0] -= 1;
//     if (arr[i] === 'north') finalCoordinate[1] += 1;
//     if (arr[i] === 'south') finalCoordinate[1] -= 1;
//   }
// return finalCoordinate;
// }

// var position = gps(['east', 'east', 'south', 'west', 'north']);
// console.log(position); // [1, 0]


//biggestNum: Write a function biggestNum that, given a multi-dimensional array of numbers, returns the largest number.

// function biggestNum(arr) {
//   var highestNum = 0;
  
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       if (biggestNum(arr[i]) > highestNum) {
//         highestNum = biggestNum(arr[i]);
//       }
//       if (arr[i] > highestNum) {
//         highestNum = arr[i];
//       }
//     }
//   }
//   return highestNum;
// }

// biggestNum([17, [83, 49], [43, [90], [62]]]); // => 90


//pumpkinPicker: Write a function pumpkinPicker that, given a deeply-nested object, returns the count of the number of 'pumpkin' strings stored as a value in any of the nested objects.

// var pumpkinPatch = {
//   meadow: {
//     byTheRock: 'apples',
//     byThePuddle: 'pumpkin'
//   },
//   hill: {
//     byTheBench: { 
//       leftOfBench: 'pumpkin',
//       rightOfBench: 'pumpkin'
//     },
//     topOfHill: 'apples'
//   }
// };

// function pumpkinPicker(patch) {
//   var pumpkinCount = 0;
  
//   for (var location in patch) {
//     var value = patch[location];
    
//     if (typeof value === 'object') {
//       pumpkinCount += pumpkinPicker(value);
//     }
//     if (value === 'pumpkin') {
//       pumpkinCount++;
//     }
//   }
//   return pumpkinCount;
// }

// pumpkinPicker(pumpkinPatch); // => 3