const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the license for this project",
        choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing guidelines"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide the tests for the project"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({ ...responses }));
        })

}

// function call to initialize program
init();
