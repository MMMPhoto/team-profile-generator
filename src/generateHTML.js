export default function generateHTML(employeeList) {
    console.log(employeeList);
    let mainHTML = "";
    for (let i = 0; i < employeeList.length; i++) {
        mainHTML += `<div class="employee-card">
        <h2 class="employee-header">${employeeList[i].name}</h2>
        <p class="detail-item">ID: ${employeeList[i].id}</p>
        <p class="detail-item">Email: ${employeeList[i].email}</p>`;
        let role = employeeList[i].getRole();
        console.log(role);        
        if (role === 'Manager') {
            mainHTML += `<p class="detail-item">Phone Number: ${employeeList[i].officeNumber}</p>
            </div>`;
        } else if (role === 'Engineer') {
            mainHTML += `<p class="detail-item">Github: ${employeeList[i].github}</p>
            </div>`;
        } else if (role === 'Intern') {
            mainHTML += `<p class="detail-item">School: ${employeeList[i].school}</p>
            </div>`;
        };      
    };

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <main>
                ${mainHTML}
            </main>
        </body>
        </html>`;
};