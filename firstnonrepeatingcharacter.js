/*Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("_").
*/

// function firstNonRepeatingCharacter(str) {
	
// 	let obj = {};
// 	for(let i = 0; i < str.length; i++){
// 		obj[str[i].toLowerCase()]= obj[str[i].toLowerCase()] +1 || 1
// 	}
	
// 	for(let k in obj){
// 		if(obj[k] === 1){
// 			return str[str.toLowerCase().indexOf(k)]
// 		}
// 	}
// 	return "_";	
// }

firstNonRepeatingCharacter('abacabade')

function firstNonRepeatingCharacter(s) {
    s = s.split('');
    for(var i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) 
            return s[i];
    }
    return '_';
}