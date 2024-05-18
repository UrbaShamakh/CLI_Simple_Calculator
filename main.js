#! /usr/bin/env node
import inquirer from "inquirer";
//asking que from user through inquirer
const answer = await inquirer.prompt([
    { massage: "Enter First Number", type: "number", name: "firstNumber" },
    { massage: "enter Second Number", type: "number", name: "secondNumber" },
    {
        massage: "Select one Operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplications", "Divide"]
    },
]);
// conditional statements if-else 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtractions") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplications") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Divide") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invailed answer");
}
;
