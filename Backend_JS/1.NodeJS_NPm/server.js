// Earlier JS is only used on browsers but for utilizing it for inidvidual programs and backend it was put in c++ program so that it can be used in individual programs and backend which is nodejs 

// for large applications and projects many dependencies are needed and for maintaining this we use npm which is used install node modules which provide different funcionalities and npm maintains a package.json that contains various details of the project and dependencies the project needs which can be installed in one command 

// usually these node modules are huge and when a project folder is shared or pushed to github these node modules are deleted , to install these we can use package.json which contains the details of the modules needed 

// console.log("Hello World ")



const slugify = require('slugify');

// Example 1: Basic usage
const title = "Hello World!";
const slug = slugify(title);
console.log(slug); // Output: "hello-world"

// Example 2: Handling special characters
const specialTitle = "What's Up, Node.js?";
const specialSlug = slugify(specialTitle);
console.log(specialSlug); // Output: "whats-up-nodejs"

// Example 3: Handling multiple spaces and trimming
const spacedTitle = "  This   is a  Test  ";
const spacedSlug = slugify(spacedTitle);
console.log(spacedSlug); // Output: "this-is-a-test"