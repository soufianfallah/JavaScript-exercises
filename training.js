/* Write a JavaScript program to check two given numbers
  and return true if one of the numbers is 100 
 or if the sum of the two numbers is 100.*/
const isequalto100 = (num1, num2) => 
num1 === 100 || num2 === 100 || num1 + num2 === 100;
console.log(isequalto100(10,100))
