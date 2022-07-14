export default function generateHTML(input) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>THIS IS A TEST PAGE</h1>
        <p1>Employee name: ${input.name}</p1>
        <p1>Employee id: ${input.id}</p1>
        <p1>Employee email: ${input.email}</p1>
    </body>
    </html>`;
};