console.log('We have JavaScript');
console.log('Yay for Node!!!!');

/**
 * Node is a tool to run JavaScript programs (scripts) without a browser
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
