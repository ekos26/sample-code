// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	var checker = 'aeiouAEIOU';
	counter = 0;
	
	for (var i = 0; i < str.length; i++) {
	  if (checker.indexOf(str[i]) >= 0) {
	    counter++;
	  }
	}
	return counter;
}
