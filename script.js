let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum)  {
    userNum = prompt("You entered wrong number. Guess again ; ");
}

console.log("congratlation, ypu entered the right number");