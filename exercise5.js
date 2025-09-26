//write a js program to get the current date mm-dd-yyyy
/*let date = new Date();
let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0');
let year = date.getFullYear();
let currentDate = month + '-' + day + '-' + year;
console.log(currentDate);*/
function getCurrentDate( date = new Date()) {
    const months = date.getMonth();
    const days = date.getDate();
    
    const years = date.getFullYear();
    return `${String(months + 1).padStart(2, '0')}-${String(days).padStart(2, '0')}-${years}`;
    
}
console.log(getCurrentDate());

//explain let,const and var with examples
//let
//The let statement declares a block-scoped local variable,
// optionally initializing it to a value. 
// Variables declared with let can be reassigned 
// but cannot be redeclared within the same scope.