// function factorial(n) {
//   var total = 1;
  
//   for (n; n > 0; n--) {
//     if (n < 0 || n > 12) {
//       return "RangeError";
    
//     } else  total*=n;
  
// }
//   return total;
// }

factorial(3);

function factorial(num){
	var total = 1;
	
	for(num; num > 1; num--){
		total*= num;
	}

	return total;
}