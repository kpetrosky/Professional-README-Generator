const README = {
  // code here
  Title: "Professional-README-generator",
  Description: "This is a really cool project that does awesome things!",
 };
 const markdown = generateReadmeMarkdown(title, description);
 console.log(markdown);

const info = `Professional-README-generator ${README.Title}! This is a really cool project that does awesome things! ${README.Properties}.`


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!renderLicenseBadge) {
  return "";
} else {
  return "";
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!renderLicenseLink) {
  return "";
} else {
  return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!renderLicenseSection) {
  return "";
} else {
  return "";
}
}
// TODO: Create a function to generate markdown for README
function info(title, description) {
  return `
# ${title}

${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
- Clone the repository: \`git clone https://github.com/your-username/your-project.git\`
- Install dependencies: \`npm install\`

## Usage
- Run the project: \`npm start\`
- Open in your browser: \`http://localhost:3000\`

## Contributing
1. Fork the repository
2. Create a new feature branch: \`git checkout -b feature/your-feature-name\`
3. Commit your changes: \`git commit -am 'Add some feature'\`
4. Push to the branch: \`git push origin feature/your-feature-name\`
5. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;
}

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
