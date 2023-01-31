// ES5 Global Constants

/* var PI = 3.14;
PI = 42; // stop me from doing this! */

var PI = 3.15;
function pi(){
    PI = 42;
}

//ES2015 Global Constants

const PI = 3.15;
PI = 42; 

/* What is the difference between var and let? - var can be reassigned and redeclared, but let can only be reassigned. Also var has function scope, and let block scope. 
What is the difference between var and const? - var can be reassigned and redeclared, but const can't do any of these. Also var has function scope, and const block scope. 
What is the difference between let and const? - let can be reassigned and const cannot. 
What is hoisting? - it is mainly related to var, that gets initialized before the rest of the code works.  
*/