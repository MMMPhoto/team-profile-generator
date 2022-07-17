export default function generateHTML(employeeList) {
    let mainHTML = "";
    for (let i = 0; i < employeeList.length; i++) {
        let role = employeeList[i].getRole();
        mainHTML += 
        `<div class="employee-card card m-3 border-dark col-3">
            <div class="employee-header card-header card-title">
                <h2 class="mb-1">${employeeList[i].name}</h2>
                <h5 class="m-0 ms-3">${role}</h5>
            </div>
            <div class="card-body text-start">
                <p class="detail-item card-text p-1 ps-3 pe-2">ID: ${employeeList[i].id}</p>
                <p class="detail-item card-text p-1 ps-3 pe-2">Email: <a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></p>`;

        if (role === 'Manager') {
            mainHTML += `<p class="detail-item card-text p-1 ps-3 pe-2">Phone Number: ${employeeList[i].officeNumber}</p>
            </div></div>`;
        } else if (role === 'Engineer') {
            mainHTML += `<p class="detail-item card-text p-1 ps-3 pe-2">Github: <a href="https://github.com/${employeeList[i].github}">${employeeList[i].github}</a></p>
            </div></div>`;
        } else if (role === 'Intern') {
            mainHTML += `<p class="detail-item card-text p-1 ps-3 pe-2">School: ${employeeList[i].school}</p>
            </div></div>`;
        };      
    };

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- CSS only -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                <link rel="stylesheet" type="text/css" href="./css/style.css" />
                <title>Team Profile</title>
            </head>
            <body>
                <header class="p-3 border-dark">
                    <h1 class="text-center">Team Profile</h1>
                </header>
                <main class="d-flex flex-wrap container justify-content-center">
                ${mainHTML}
                </main>
            </body>
            </html>`;
};