console.log('Program started..');

// Import core modules
import fs from 'fs';
import inquirer from 'inquirer';

// Import helper files
import generateHTML from './src/generateHTML.js';

inquirer.prompt([
    {
        type: 'input',
        message: 'Inquirer test',
        name: 'test'
    }
])
.then((userInput) => {
    console.log(userInput);
    fs.writeFile('./dist/index.html', `${generateHTML(userInput)}`, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});

