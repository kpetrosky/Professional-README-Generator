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

function generateMarkdown(data) {
  // TODO: Generate markdown content for README file based on user's responses
  return '';
}

function init(data) {
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
        message: 'how to install?',
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
      const markdown = generateMarkdown(response);
      writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();


// TODO: Create a function to write README file

writeToFile('README.md', process.argv[2]); {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} file generated successfully!`);
    }
  });
}



fs.appendFile('README.md', `${process.argv[2]}\n`, (err) => {
    if (err) throw err;
    console.log('The input was successfully appended to the README file.');
});
  