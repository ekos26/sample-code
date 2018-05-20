function toCamelCase(str){
  var result = "";

  for (var i = 0; i< str.length; i++) {
    if (str.charAt(i) === '-' || str.charAt(i) === '_') {
      i++;
      if (i < str.length) {
        result += str.toUpperCase().charAt(i);
      }
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}



// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
//toCamelCase("The_Stealth_Warrior")