// It is convention to keep all or your required files at the top of your script
// can drop the .js extension in the filepath and get the same results

// Load cullenites.js file
let cullenites = require('./cullenites.js'); // needs to be a string inside of require('filepath')
console.log('cullenites:', cullenites.students);
console.log('instructor is:', cullenites.instructor);

const myFavoriteNumber = require('./myFavoriteNumber');
console.log('myFavoriteNumber:', myFavoriteNumber);

let scream = require('./scream');
console.log('Hello', scream('world!'));

let counter = require('./counter');
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log('We have JavaScript');
console.log('Yay for Node!!!!');

/**
 * Node is a tool to run JavaScript programs (scripts) without a browser
 *
 * used to run servers that respond to HTTP (network) requests
 *
 * in node, module means file
 *
 * Node is JavaScript
 * pretty much anything we can do in the browser, we can do in node
 *
 * There is no DOM in Node
 * there is no rendering
 *
 * no using jQuery in Node-land
 *
 * Node is going to run our server
 *
 * In general, what we run in Node is going to handle data
 *
 * *** to run a file in terminal => node filename.extension
 *
 * can only run 1 file at a time
 * *** if you want to run more than 1 file, need to `require()` additional files
 * think of each file as a function and `module.exports` is the `return`
 *
 * there always needs to be one entry point file but the `required` modules can require their own modules
 */

let age = 33;
if (age > 23) {
  console.log('you are old!!');
}

// // No jQuery Party Tiem :-(
// $(document).ready(() => {
//   $(body).append(`<h1>Hello World!</h1>`);
// });

for (let i = 0; i <= 171; i += 3) {
  console.log('i:', i);
}

let grade = 'B';

switch (grade) {
  case 'A':
    console.log('Great Job!!!');
    break;
  case 'B':
    console.log('Excellent!');
    break;
  case 'C':
    console.log('Not Bad');
    break;
  case 'D':
    console.log("Let's try harder next time");
    break;
  case 'F':
    console.log("I'm disappointed in you");
    break;
}

for (let student of cullenites.students) {
  console.log(`Welcome to node week, ${student}!`);
}
