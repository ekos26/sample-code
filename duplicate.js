//contains duplicates return true, if not false

// function containsDuplicates (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) return true;
//     }
//   }
//   return false;
// }

console.log(containsDuplicates([2,1,3,3]));
// console.log(containsDuplicates([2,4,6]));

function containsDuplicates (arr) {
  var dictionary = {};
  
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    
    if (!dictionary[element]) dictionary[element] = true;
    else return true;
  }
  return false;
}