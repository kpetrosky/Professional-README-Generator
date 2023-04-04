// TODO: Include packages needed for this application

const nodejs = {
    name: 'Node.js',
    type: 'JavaScript runtime environment',
};

const { name, type } = nodejs;

console.log(name);
console.log(type);

// TODO: Create an array of questions for user input

// Call the functions to generate and write the README file

const fs = require('fs');
const inquirer = require('inquirer');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} file generated successfully!`);
    }
  });
}


function generateReadmeMarkdown(data) {
  // TODO: Generate markdown content for README file based on user's responses
  //generate markdown
  //have to use markdown stringy to use data (readme for chall 9)
  // using professional readme file
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test}

## License

This project is licensed under the ${data.license} license.
`;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`The README was successfully created in ${fileName}.`);
  });
}

function init() {
  const inquirer = require('inquirer');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your README?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your application?',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who wrote the README?',
      },
      {
        type:'input',
        name: 'installation',
        message: 'How to install?',
      },
      {
        type:'input',
        name: 'usage',
        message: 'How you should plan to use?',
      },
      {
        type:'input',
        name: 'contributing',
        message: 'Who is contributing to this application?',
      },
      {
        type:'input',
        name: 'test',
        message: 'What tests should be run?',
      },
      {
        type:'input',
        name: 'license',
        message: 'What license does this application have?',
      },
    ])
    .then((response) => {
      const markdown = generateReadmeMarkdown(response);
      writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();



