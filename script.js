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
