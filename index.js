console.log('Program started..');

// Import core modules
import fs from 'fs';
import inquirer from 'inquirer';

// Import helper files
import Employee from './lib/employee.js';
import generateHTML from './src/generateHTML.js';

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter Employee name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter Employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter Employee email',
        name: 'email',
    }
])
.then((answers) => {
    console.log(answers);
    const newEmployee = new Employee(answers.name, answers.id, answers.email);

    fs.writeFile('./dist/index.html', `${generateHTML(newEmployee)}`, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});

