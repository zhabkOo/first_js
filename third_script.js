//2.3----------------GUESS NUMBER GAME------------------//
let ageCheck = confirm("Do you have a 18?"); //Confirm: OK/CANCEL
let randomNumber = Math.round(Math.random() * 10); //Round a number to the nearest integer
let userNumber = undefined; //empty variable

console.log("randomNumber:", randomNumber);

if (ageCheck === true) {
  userNumber = prompt("Guess the number from 0 to 10");
  console.log("userNumber:", userNumber, "randomNumber:", randomNumber);
  if (userNumber === "") {
    alert("Give me more data"); //check pressing OK button with empty input
  } else if (userNumber === null) {
    alert("You refused to play a game with me"); //check pressing CANCEL button
  } else if (+userNumber === randomNumber) {
    alert("Congratulate, you win!"); //IF USER WON GAME
  } else if (isNaN(userNumber)) {
    alert("I understand only numbers"); //Abracadabra check :)
  } else if (userNumber < 0 || userNumber > 10) {
    alert("Your number is out of range from 0 to 10"); //check Out Of Range
  } else {
    alert("You lose! :("); //IF USER LOSE GAME
  }
} else {
  console.log("ageCheck:", ageCheck);
  alert("Sorry, you cannot play this game.");
  window.close();
}

// if (ageCheck === true) {
//   userNumber = prompt("Guess the number from 0 to 10");
//   console.log("userNumber:", userNumber, "randomNumber:", randomNumber);
//   if (+userNumber === randomNumber) {
//     alert("Congratulate, you win!"); //IF USER WON GAME
//   } else if (userNumber === null) {
//     alert("You refused to play a game with me"); //check pressing CANCEL button
//   } else if (userNumber === "") {
//     console.log("userNumber if empty OK:", userNumber);
//     alert("Give me more data"); //check pressing OK button with empty input
//   } else if (isNaN(userNumber)) {
//     alert("I understand only numbers");
//   } else if (userNumber < 0 || userNumber > 10) {
//     alert("Your number is out of range from 0 to 10"); //check Out Of Range
//   } else if (userNumber != randomNumber) {
//     alert("You lose! :("); //IF USER LOSE GAME
//   }
// } else {
//   console.log("ageCheck:", ageCheck);
//   alert("Sorry, you cannot play this game.");
//   window.close();
// }

// if (userNumber === randomNumber) {
//   alert("Congratulate, you win!");
// } else if (userNumber === null) {
//   alert("You refused to play a game with me"); //check pressing cancel button
// } else if (userNumber === "") {
//   alert("Give me more data"); //check pressing OK button with empty input
// } else if (isNaN(userNumber)) {
//   alert("I understand only numbers");
// } else if (userNumber < 0 || userNumber > 10) {
//   alert("Your number is out of range from 0 to 10");
// } else if (userNumber != randomNumber && userNumber != false) {
//   alert("You lose! :(");
// }
// console.log(ageCheck);
// console.log(randomNumber);
// //   // alert("Sorry, you cannot play this game.");
// //   // window.close();
// // }
