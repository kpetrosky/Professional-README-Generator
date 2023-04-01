// TODO: Include packages needed for this application

const nodejs = {
    name: 'Node.js',
    type: 'JavaScript runtime environment',
};

const { name, type } = nodejs;

console.log(name);
console.log(type);


const js = {
    name: 'JavaScript',
    type: 'programming language',
    version: 'ES6',
    tools: {
        frameworks: {
            framework1: 'AngularJS',
            framework2: 'Vue.js',
        },
        libraries: {
            library1: 'jQuery',
            library2: 'React',
        },
    },
};

const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1);
console.log(framework2);


const languages = ['HTML', 'CSS', 'JavaScript'];

const [markup, style, scripting] = languages;

console.log(markup, style, scripting);
console.log(markup);
// TODO: Create an array of questions for user input
const prompt = [{
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
},
{
    type: 'password',
    message: 'What is your password?',
    name: 'password',
},
{
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
},];

if ((response) =>
    response.confirm === response.password
        ? console.log('Success!')
        : console.log('You forgot your password already?!')
);

// TODO: Create a function to write README file
function writeToFile(fileName, data)
const fs = require('fs')

fs.writeFile('README.md', readmeContent, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('README file generated successfully!');
    }
});
function readmeContent(title, description, installation, usage, contributing, tests, license) {
    // Construct the content of the README file using the provided parameters
    const readmeContent = `# ${title}

${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is licensed under the ${license} license.

---

${new Date().getFullYear()}  Name`;
}
// Write the content to a README file in the current directory


// TODO: Create a function to initialize app
function init() {
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title of README',
      message: 'What is the name of your README?', //recommended to use a name that represents the project. I.E. Professional-README-generator.
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Please decribe your application?', //recommended to be clear and use screen shots as needed
      
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who wrote the README?', // include all contributors
    }
  ])
  .then((response) => {
    fs.writeFile("input.json", JSON.stringify(response), function (err) {
      if (err) {
        console.log('Success!')
      }
    });
  });
}

// Function call to initialize app
init()
