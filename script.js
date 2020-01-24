//-------THE FIRST PART OF THE TASK-------//
//1.-------RECTANGLE AREA-------//
let a = 2.4, //"a" side of rectangle is 2.4
  b = 3.3, //"b" side of rectangle is 3.3
  rectArea = a * b, //Getting rectangle area
  roundedArea = +rectArea.toFixed(1); //converting to number and rounding to one decimal place
console.log(roundedArea); //output result to console

//2.-------CODE NAME "POLINA"-------//
let name = "Polina",
  age = 25,
  currentYear = 2020;
console.log(
  `My name is ${name}. I was born in ${currentYear -
    age} and I'm ${age} years old`
); //Output using template literals

//3.-------CIRCLE AREA-------//
let circleRadius = "5.67cm";
let circleRadiusNumber = parseFloat(circleRadius); //convert circleRadius to number with float point
let circleArea = Math.PI * circleRadiusNumber ** 2; //π*R²
console.log(circleArea); //output result to console

//-------THE SECOND PART OF THE TASK-------//
//1.-------EVEN OR ODD-------//
// debugger;
let userNumber = +prompt("Please, enter the Number");
userNumberTypeof = typeof userNumber;
console.log(
  "Inf:",
  "Number Is:",
  userNumber,
  "type of userNumber:",
  typeof userNumber,
  "userNumberTypeof:",
  typeof userNumberTypeof
);

// switch (isNaN(userNumber)) {
//   case true:
//     alert("NaN");
//   case false:
//     switch (userNumberTypeof) {
//       case "string":
//       case "object":
//       case "0":
//         alert("This is not a number");
//         break;
//       default:
//         alert("default");
//     }
// }

// switch (userNumberTypeof) {
//   // case 0:
//   //   userNumber = String(userNumber); //If userNumber is 0 -> convert it to String
//   //
//   //   break;
//   case "string":
//   case "object":
//     console.log("if 0 conv to Str:", userNumberTypeof, typeof userNumberTypeof);
//     alert("This is not a number");
//     break;
//   default:
//     alert("default");
//     console.log("if 0 conv to Str:", userNumberTypeof, typeof userNumberTypeof);
// }

console.log("The end:", userNumber, typeof userNumber, typeof userNumberTypeof);
