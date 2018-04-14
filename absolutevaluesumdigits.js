// function sumDigits(number) {
// 	number = Math.abs(number).toString();
// 	var sum = 0;
	
// 	for (var i = 0; i < number.length; ++i) {
// 	  sum += parseInt(number[i]);
//   }
// 	return sum;
// }

// sumDigits(99);
sumDigits(-19);

function sumDigits(number) {
  var sum = 0;
  number = Math.abs(number);
  
  while (number > 0) {
    sum+= number % 10;
    number = Math.floor(number / 10) 
  }
  
  return sum;
}