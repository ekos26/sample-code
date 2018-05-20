//Given an integer num, write code to print a countdown from num to 1. After the countdown is up, print the line "Liftoff!". 

// function liftOff (num) {
//   if (num === 0) {
//     console.log("Liftoff!");
//   }
//   else {
//     console.log(num);
//     liftOff(num - 1);
//   }
// }


liftOff(8);

// function liftOff (num) {
//   while (num >= 1) {
//     console.log(num);
//     num--;
//   }
//   if (num === 0) {
//     console.log("liftoff!");
//   }
// }

function liftOff (num) {
  for (var i = num; i >= 1; i--) {
    console.log(i);
  }
    console.log("Liftoff!");
}