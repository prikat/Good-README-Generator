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
        name: "githubUsername",
        message: "What is your Github Username?"
    }
])
