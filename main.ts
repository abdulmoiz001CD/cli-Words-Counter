#! usr/bin/env node;

import inquirer from "inquirer";


interface user{
    enterSent:string
}


const askUser:user = await inquirer.prompt([
    {message:"Wirte Your sentences Here ",name:"enterSent",type:"input"}]
);


const word:string[] = askUser.enterSent.trim().split(" ");

console.log(`Your Total words in this Sentence is "${word.length}".`)


