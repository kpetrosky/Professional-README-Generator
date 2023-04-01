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


// TODO: Create a function to write README file

const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} file generated successfully!`);
        }
    });
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} file generated successfully!`);
        }
    });
}

function readmeContent(title, description, installation, usage, contributing, tests, license) {
    // Construct the content of the README file using the provided parameters
    const readmeContent = `# ${title}

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License

${license}

${new Date().getFullYear()}  Name`;
    
    // Return the generated content
    return readmeContent;
}

// Call the functions to generate and write the README file
const content = readmeContent('My Project', 'A short description of my project', 'npm install', 'node index.js', 'Contributions welcome!', 'npm test', 'MIT License');
writeToFile('README.md', content);




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
