#! usr/bin/env node;
import inquirer from "inquirer";
const askUser = await inquirer.prompt([
    { message: "Wirte Your sentences Here ", name: "enterSent", type: "input" }
]);
const word = askUser.enterSent.trim().split(" ");
console.log(`Your Total words in this Sentence is "${word.length}".`);
