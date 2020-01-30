//2.3----------------GUESS NUMBER GAME------------------//
let ageCheck = confirm("Do you have a 18?");
let randomNumber = Math.round(Math.random() * 10);
let userNumber = +"";

console.log(randomNumber);
if (ageCheck === true) {
  userNumber = prompt("Guess the number from 0 to 10");
} else {
  alert("Sorry, you cannot play this game.");
  window.close();
}
if (userNumber === randomNumber) {
  alert("Congratulate, you win!");
} else if (userNumber === null) {
  alert("You refused to play a game with me"); //check pressing cancel button
} else if (userNumber === "") {
  alert("Give me more data"); //check pressing OK button with empty input
} else if (isNaN(userNumber)) {
  alert("I understand only numbers");
} else if (userNumber < 0 || userNumber > 10) {
  alert("Your number is out of range from 0 to 10");
} else {
  alert("You lose! :(");
}
console.log(ageCheck);
console.log(randomNumber);
