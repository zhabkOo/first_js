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
let userNumber = prompt("Please, enter the Number");
console.log(userNumber);

// if (userNumber === null && "") {
//   switch (userNumber) {
//     case null:
//       alert("You refused to play a game with me");
//       break;
//     case "":
//       alert("Give me more data");
//       break;
//   }
// } else {
//   alert("nothing");
// }
if (userNumber === null) {
  alert("You refused to play a game with me"); //check pressing cancel button
} else if (userNumber === "") {
  alert("Give me more data"); //check pressing OK button with empty input
} else if (isNaN(userNumber)) {
  alert("I understand only numbers"); //check not a number input
  // switch (isNaN(userNumber)) {
  //   case true:
  //     alert("I understand only numbers");
  //     break;
  //   default:
  //     "";
  // }
} else if (userNumber === "0") {
  alert("This is 0, and it is already string"); //no need to convert 0 to string because it is already a string
} else if (userNumber) {
  userNumber = +userNumber; //just in case, translate string to a number
  alert(userNumber % 2 === 0 ? "Even" : "odd");
  switch (userNumber < 0) {
    case true:
      userNumber % 3 === 0
        ? alert(
            `Number less than 0. Divisible by 3 WITHOUT remainder. So multiply ${userNumber} by ${userNumber} = ${userNumber *
              userNumber}`
          )
        : alert(
            `Number less than 0. Divided by 3 WITH the remainder. So we get the remainder of dividing by 8 = ${userNumber %
              8}`
          );
      break;
    case false:
      alert(`Square root of ${userNumber} is ${Math.sqrt(userNumber)}`);
    default:
      "";
  }
}
