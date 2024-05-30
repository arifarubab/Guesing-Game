import inquirer from "inquirer";
let guess = 8;
let guessNumber = await inquirer.prompt({
    message: "Guess your Number",
    type: "number",
    name: "yourGuess"
});
if (guessNumber.yourGuess === guess) {
    console.log("Congratulations!!! Your guess is right..........");
}
else {
    console.log("Opss!!! Your guess is wrong");
}
