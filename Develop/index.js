// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
];

inquirer.prompt(questions).then( (answers) => {
    console.log(answers);
    generateREADME(answers);
    // Use the answers to generate the README file
  });

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function generateREADME(answers) {
  // Generate the content of the README file based on the answers
  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, contact me through GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
Or via email: ${answers.email}
`;

  // Write the README file
  writeFileAsync('README.md', readmeContent)
    .then(() => {
      console.log('README.md file has been generated!');
    })
    .catch((err) => {
      console.error(err);
    });
}

// Call the function with the answers object
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
