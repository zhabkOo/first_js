//-------RECTANGLE AREA-------//
let a = 2.4, //"a" side of rectangle is 2.4
  b = 3.3, //"b" side of rectangle is 3.3
  rectArea = a * b, //Getting rectangle area
  roundedArea = +rectArea.toFixed(1); //converting to number and rounding to one decimal place
console.log(roundedArea); //output result to console

//-------CODE NAME "POLINA"-------//
let name = "Polina",
  age = 25,
  birthYear = 1995,
  currentYear = 2020;
console.log(
  `My name is ${name}. I was born in ${birthYear} and I'm ${currentYear -
    birthYear} years old`
); //Output and interpolation
