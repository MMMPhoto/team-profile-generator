const questions = [
{
    type: 'list',
    message: 'Which kind of Employee would you like to enter?',
    name: 'employeeType',
    choices: ['Manager', 'Engineer', 'Intern'],
},
{
    type: 'input',
    message: "Please enter the Employee's name:",
    name: 'employeeName',
},
{
    type: 'input',
    message: "Please enter the Employee's ID:",
    name: 'employeeId',
},
{
    type: 'input',
    message: "Please enter the Employee's email:",
    name: 'employeeEmail',
},
{
    type: 'input',
    message: "Please enter the Manager's office number:",
    name: 'officeNumber',
    when: (answers) => answers.employeeType === 'Manager',
},
{
    type: 'input',
    message: "Please enter the Engineer's github profile:",
    name: 'employeeGithub',
    when: (answers) => answers.employeeType === 'Engineer',
},
{
    type: 'input',
    message: "Please enter the Intern's school:",
    name: 'employeeschool',
    when: (answers) => answers.employeeType === 'Intern',
},
{
    type: 'confirm',
    message: 'Would you like to enter another Employee?',
    name: 'anotherEmployee',
    choices: ['yes', 'no'],
}];

export default questions;