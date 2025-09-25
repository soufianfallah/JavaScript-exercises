/*Write a javascript program to replace every 
character in a given string with the character f
ollowing it in the alphabet.*/
/*methos 1*/
const replaceWithNextChar1 = (str) =>
str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(replaceWithNextChar1('abcdefgh'));




/* to split a string breaking a string into an array*/
let text1 = "Hello,World,JavaScript";
console.log(text1.split(',')); // Output: ['Hello', 'World', 'JavaScript']

let sentence = "I love coding";
console.log(sentence.split(' ')); // Output: ['I', 'love', 'coding']
/* to slice a string for extracting a portion of an existing string or array */
let text2 = "Hello World";
console.log(text2.slice(0 ,5));  // Output: "Hello"
console.log(text2.slice(6));     // Output: "World"


let array = [10, 20, 30, 40, 50];
console.log(array.slice(0, 3)); // Output: [2, 3, 4]