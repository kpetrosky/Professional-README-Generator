const README = {
  Title: "Professional-README-generator",
  Description: "This is a really cool project that does awesome things!",
};

const info = `${README.Title}! ${README.Description}`;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // TODO: Implement this function
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // TODO: Implement this function
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // TODO: Implement this function
}

// TODO: Create a function to generate markdown for README
function generateReadmeMarkdown(title, description) {
  return `
# ${title}

${description}

# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation


## Usage

## Credits


## License


## Badges

## Features

## How to Contribute

## Tests
`;
}

module.exports = generateReadmeMarkdown;

