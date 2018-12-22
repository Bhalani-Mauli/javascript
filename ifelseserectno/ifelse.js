var secretNumber = 4;
var guess = prompt("Guess a Number");
alert(guess);
if(guess === secretNumber){
    alert("you got it right!");
}
else if (Number(guess)> secretNumber){
    alert("Too high. Guess again")
}
else{
    alert("Too low. Guess again");
}