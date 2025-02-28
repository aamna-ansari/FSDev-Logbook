// Exercise 2: Play With Variables ✨

const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return b - a;
}

// Multiply the two values
function multiply() {
    return a * b;
}

// Divide larger value by smaller one
function divide() {
    return b / a;
}

// Increase value of a by 1
function increment() {
    return a + 1;
}

// Decrease value of b by 1
function decrement() {
    return b - 1;
}

// Divide larger value by smaller one to find the remainder
function reminder() {
    return b % a;
}

// Output
console.log("Addition:", add());          
console.log("Subtraction:", subtract());  
console.log("Multiplication:", multiply()); 
console.log("Division:", divide());       
console.log("Increment:", increment());   
console.log("Decrement:", decrement());   
console.log("Reminder:", reminder());     


// Addition: 42
// Subtraction: 6
// Multiplication: 432
// Division: 1.3333333333333333
// Increment: 19
// Decrement: 23
// Reminder: 6