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

// Generate employees
function createEmployeeList(answers) {
    if (answers.employeeType === 'Manager') {
        let newManager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.officeNumber);
        employeeList.push(newManager);
    } else if (answers.employeeType === 'Engineer') {
        let newEngineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
        employeeList.push(newEngineer);
    } else if (answers.employeeType === 'Intern') {
        let newIntern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
        employeeList.push(newIntern);
    };
};

// CLI input
function userInput(questions, firstTime) {
    if (firstTime) console.log("Welcome to the Team Profile Generator!");
    return inquirer.prompt(questions)
    .then((answers) => {
        createEmployeeList(answers);
        if (answers.anotherEmployee) {
            firstTime = false;
            return userInput(questions);
        } else {
            return answers;
        };
    });
};

// Invoke User Input Function
userInput(questions, firstTime)
.then((answers) => {
    console.log(employeeList);
    fs.writeFile('./dist/index.html', `${generateHTML(employeeList)}`, (err) =>
        err ? console.log(err) : console.log('Success! Your HTML/CSS files were written to the dist folder.')
    );
});