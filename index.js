#!/usr/bin/env node
import inquirer from "inquirer";
const random_Number = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing game.");
const answers = await inquirer.prompt([
    {
        name: "user_Guess_number",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answers.user_Guess_number === random_Number) {
    console.log("Congratulation you have guess a right number.");
}
else {
    console.log("You loose! Guess a wrong number. ");
}
