console.log('Program started..');

// Import core modules
import fs from 'fs';
import inquirer from 'inquirer';

// Import helper files
import Employee from './lib/employee.js';
import Manager from './lib/manager.js';
import Engineer from './lib/engineer.js';
import Intern from './lib/intern.js';
import generateHTML from './src/generateHTML.js';
import questions from './src/questions.js';

// Set global variables
let employeeList = [];
let firstTime = true;


function userInput(questions, firstTime) {
    if (firstTime) console.log("Welcome to the Team Profile Generator!");
    return inquirer.prompt(questions).then((answers) => { 
        if (answers.anotherEmployee) {
            firstTime = false;
            return userInput(questions);
        } else {
            return answers;
        };
    });
};

userInput(questions, firstTime)
.then((answers) => {
    console.log(answers);
    const newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);

    fs.writeFile('./dist/index.html', `${generateHTML(newEmployee)}`, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
