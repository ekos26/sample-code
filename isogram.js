//isogram no repeating letters

function isIsogram(str){
   var str = str.toLowerCase();
   
   for(var i = 0; i< str.length; i++) {
     for(var j= i+1; j < str.length; j++) {
       if(str[i] === str[j]) {
         return false;
       }
    }
  }
   return true;
}

isIsogram("Dermatoglyphics") //true 
isIsogram("isogram") //true 
isIsogram("aba") //false, "same chars may not be adjacent" 
isIsogram("moOse") //false, "same chars may not be same case" 
isIsogram("isIsogram"), //false 
isIsogram("") //true, "an empty string is a valid isogram" 