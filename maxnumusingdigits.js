//Given a number, return the maximum number that could be formed from the digits of the number given. only positive and duplications can occur


function maxNumber (num) {
  var tab = (num.toString()).split('').sort().reverse().join('');
  return parseInt(tab);
}


maxNumber(231); //321