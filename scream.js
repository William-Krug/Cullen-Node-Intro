module.exports = function scream(text) {
  return text.toUpperCase();
};

// can export the variable (name) of something or that thing directly
// the above is the same as below:

// // another way to accomplish above
// module.exports = function(text) {
//   return text.toUpperCase();
// }

// // yet another way to accomplish above
// function scream(text) {
//   return text.toUpperCase();
// }

// module.exports = scream;
