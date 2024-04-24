#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
let guessedCorrectly = false;
while (!guessedCorrectly) {
    const answers = await inquirer.prompt([
        { name: "userGuessedNumber", type: "number", message: chalk.green("Please guess a number between 1-10") },
    ]);
    if (answers.userGuessedNumber === randomNumber) {
        console.log(chalk.yellow.bold("Congratulations! You got it right!"));
        guessedCorrectly = true;
    }
    else {
        console.log(chalk.redBright("You guessed the wrong number. Try again!"));
    }
}
