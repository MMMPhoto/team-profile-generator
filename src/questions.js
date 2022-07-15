const questions = [{
    type: 'input',
    message: "Welcome to the Team Profile Generator. Please enter your Manager's name:",
    name: 'managerName'
},
{
    type: 'input',
    message: "Manager's ID:",
    name: 'managerId',
},
{
    type: 'input',
    message: "Manager's email:",
    name: 'managerEmail',
},
{
    type: 'input',
    message: "Manager's office number:",
    name: 'officeNumber',
},
{
    type: 'confirm',
    message: 'Would you like to enter another Employee?',
    name: 'newEmployee',
    choices: ['yes', 'no'],
},
{
    type: 'list',
    message: 'Which employee type would you like to add?',
    name: 'employeeChoice',
    choices: ['Engineer', 'Intern'],
    when: (answers) => answers.newEmployee === true,
},
{
    type: 'input',
    message: "Please enter the employee's name:",
    name: 'employeeName',
    when: (answers) => answers.newEmployee === true,
},
{
    type: 'input',
    message: "Employee's ID:",
    name: 'employeeId',
    when: (answers) => answers.newEmployee === true,
},
{
    type: 'input',
    message: "Employee's email:",
    name: 'employeeEmail',
    when: (answers) => answers.newEmployee === true,
},
{
    type: 'input',
    message: "Employee's github profile:",
    name: 'employeeGithub',
    when: (answers) => answers.employeeChoice === 'Engineer',
},
{
    type: 'input',
    message: "Employee's school:",
    name: 'employeeschool',
    when: (answers) => answers.employeeChoice === 'Intern',
}
];

export default questions;