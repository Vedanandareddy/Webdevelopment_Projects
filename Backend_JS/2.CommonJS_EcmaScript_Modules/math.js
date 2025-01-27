// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Exporting multiple functions as named exports this is the type of exports that are used in commonjs 
module.exports = {
    b:1,
  add,
  subtract,
};


// if there are multiple exports in a module last module.exports is considered and all are ingnored 
module.exports = {
    a:17,
    subtract,
  };