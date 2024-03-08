// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents 
  
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## License
  
  This project is license under the ${data.license} license.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact ${data.username} directly at ${data.email}.
  `;
  }



module.exports = generateMarkdown;
