//-------THE SECOND PART OF THE TASK-------//
//1.-------EVEN OR ODD-------//
// debugger;
let userNumber = prompt("Please, enter the Number");

if (userNumber === null) {
  alert("You refused to play a game with me"); //check pressing cancel button
} else if (userNumber === "") {
  alert("Give me more data"); //check pressing OK button with empty input
} else if (isNaN(userNumber)) {
  alert("I understand only numbers"); //check not a number input
} else if (userNumber === "0") {
  alert("This is 0, and it is already string"); //no need to convert 0 to string because it is already a string
} else if (userNumber) {
  userNumber = +userNumber; //just in case, translate string to a number
  alert(userNumber % 2 === 0 ? "Even" : "Odd");
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
      let squaredRoot = Math.sqrt(userNumber);
      alert(`Square root of ${userNumber} is ${squaredRoot}`);
      let roundedUpSquaredRoot = Math.ceil(squaredRoot);
      console.log(`RoundedUpSquare: ${roundedUpSquaredRoot}`);
      switch (roundedUpSquaredRoot > 1) {
        case true:
          alert(
            `Rounded up squared root > 1, multipled by itself = ${roundedUpSquaredRoot *
              roundedUpSquaredRoot}`
          );
          break;
        case false:
          alert(
            `Rounded up squared root < 1, subtract 0.5 from the Rounded up squared root = ${roundedUpSquaredRoot -
              0.5}`
          );
          break;
      }
    default:
      "";
  }
}
