//Define a function called reverse with one parameter. This function will reverse the string.
//You cannot use any built in methods to do this. Use a loop.

// let sentence = "My name is John!";
// function reverse(str) {
//   const reverseString = (str = "") => {
//     let reverse = "";
//     const { length: len } = str;
//     for (let i = len - 1; i >= 0; i--) {
//       reverse += str[i];
//     }
//     return reverse;
//   };
//   console.log(reverseString(str));
// }

// reverse(sentence); // "!nhoJ si eman yM"

//class answer
let sentence = "My name is John!";
function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; --i) {
    newStr += str[i];
  }
  return newStr;

}
const r = reverse(sentence);
console.log(r);
