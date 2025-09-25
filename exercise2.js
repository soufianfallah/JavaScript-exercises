/*Exercise 2 
write a javascript program to get the extension of a filename.*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('document.html.js')); 