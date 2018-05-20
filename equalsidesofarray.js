//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.


function findEvenIndex(arr) {
  var leftSum = 0;

  for (var i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i - 1];
    console.log(i);
    var rightSum = 0;

    for (var j = i; j < arr.length - 1; j++) {
      rightSum += arr[j + 1];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

findEvenIndex([1, 1, 100, 50, 100, 1, 1]); //index 3