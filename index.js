const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
//  const titleCased = tutorials.map(function (tutorial) {
//   return tutorial.charAt(0).toUpperCase() + tutorial.slice(1) 
// });

// function titleCased(lesson) {
//   return lesson.map(lesson => lesson.charAt(0).toUpperCase() + lesson.slice(1));
// }

// function titleCased() {
//   return tutorials.map(function (tutorial) {
//   const words = tutorial.split(" ");
//   const capitalizeWords = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizeWords.join(" ");
//   });
// };

// In arrow function: 
function titleCased() {
  return tutorials.map(tutorial =>
    tutorial
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}


// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// function titleCased() {
//   return tutorials.map(function (tutorial) {
//   const words = tutorial.split(" ");
//   const capitalizeWords = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizeWords.join(" ");
//   });
// };


// // const titleCased = tutorials.map(function (tutorial) {
// //   return tutorials[0].toUpperCase
// // });

// // function titleCased(tutorial) {
// //   return tutorial[0].toUpperCase
// // }