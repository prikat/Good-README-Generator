const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

inquirer
.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your repository?"
    },{
        type: "input",
        name: "description",
        message: "Give a short description of your project"
    },{
        type: "input",
        name: "table",
        message: "Table of Contents"
    },{
        type: "input",
        name: "installation",
        message: "What will a user need to install to use the application?"
    },{
        type: "input",
        name: "usage",
        message: "How does the project function?"
    },{
        type: "list",
        name: "license",
        message: "Which license will you be attaching to the project?",
        choices: [
            "MIT",
            "GPL",
            "Apache"
        ]
    },{
        type: "input",
        name: "contributing",
        message: "Who else contributed to the project?"
    },{
        type: "input",
        name: "tests",
        message: "List any tests that pertain to the project."
    },{
        type: "input",
        name: "questions",
        message: "What is your Github Username?"
    }
]).then(function(data){
    const readMe = `
    # Title
    ${data.title}
    # Description
    ${data.description}
    # Table of Contents
    ${data.table}
    # Installation
    ${data.installation}
    # Usage
    ${data.usage}
    # License
    <img src='https://img.shields.io/badge/License-${data.license}-black' alt='badge'>
    # Contributing
    ${data.contributing}
    # Tests
    ${data.tests}
    # Questions
    If you have any questions, please feel free to contact me below.
    `

        fs.writeFile("README.md", readMe, function(err){
            if(err){
                return console.log(err)
            }
            console.log("Success")
        });

        const queryURL = `https://api.github.com/users/${data.githubUsername}`;
        axios.get(queryURL).then(function(res){
            const user = res.data;
            const githubProfile = `
            <a href='${user.html_url}'>Github Profile: ${user.login}</a>
            <img src='${user.avatar_url}' height='200px' alt='github avatar'>
            `
            fs.appendFile(`README.md`, githubProfile, function(err) {
                if (err) {throw err};
        
                console.log(`Added Github Info`);
            });
        if (user.email !== null){
          fs.appendFile(`README.md`, `Email: ${user.email}`, function(err) {
            if (err) {throw err};
        
            console.log(`Added Github Email`);
        })} else {
            fs.appendFile(`README.md`, `Email: Not Provided`, function(err) {
                if (err) {throw err};
            });
            console.log("No email provided.")
        };
        });
        });
