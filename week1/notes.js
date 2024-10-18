// ===============================================
// JavaScript Foundations and Concepts
// ===============================================

// -----------------------------------------------
// 1. Interpreted vs. Compiled Languages
// -----------------------------------------------
//  **Interpreted Languages**: Code is executed line by line by an interpreter at runtime.
//   - Example: JavaScript is interpreted by the browser's JavaScript engine (like V8 in Chrome).
//   - Advantages: Faster development cycles, platform independence.
// **Compiled Languages**: Code is transformed into machine code by a compiler before execution.
//   - Example: C++, Java.
//   - Advantages: Faster execution speed, type checking at compile-time.

// -----------------------------------------------
// 2. Why JavaScript is Popular
// -----------------------------------------------
// **Cross-Platform Compatibility**: Runs in all modern web browsers and on servers via Node.js.
// **Versatility**: Used for front-end (web), back-end (servers), mobile apps, desktop apps, etc.
// **Large Community and Ecosystem**: Extensive libraries and frameworks (React, Angular, Vue) enhance productivity.
// **Event-Driven and Asynchronous**: Efficient handling of I/O operations and user interactions.

// -----------------------------------------------
// 3. Static vs. Dynamic Typing
// -----------------------------------------------
// **Static Typing**: Variable types are known at compile time (e.g., in Java or C#).
//   - Errors related to data types are caught early.
//  **Dynamic Typing**: Variable types are determined at runtime. JavaScript is dynamically typed.
//   - A variable can hold any type of data and can change types over its lifetime.
//   - Offers flexibility but may lead to runtime errors if not managed carefully.

// Example of dynamic typing:
let variable = 42;        // Initially a Number
variable = "Now a string"; // Now a String
// The type of 'variable' changed from Number to String.

// -----------------------------------------------
// 4. Single-Threaded Nature of JavaScript
// -----------------------------------------------
// JavaScript uses a **single-threaded event loop** model.
//    It can execute one piece of code at a time.
//  **Asynchronous operations** are handled via callbacks, promises, and async/await.
//  The **event loop** allows JavaScript to perform non-blocking operations,
//   despite being single-threaded, by offloading tasks to the Web APIs (in browsers)
//   or to the libuv thread pool (in Node.js).

// -----------------------------------------------
// 5. Primitives in JavaScript
// -----------------------------------------------
// Primitive data types are basic types that are not objects and have no methods.
// The seven primitives are:
// **String**
//  **Number**
//  **Boolean**
//  **Null**
//  **Undefined**
//  **Symbol**
//  **BigInt**

// Examples of primitives:
let str = "Hello, World!"; // String
let num = 100;             // Number
let bool = true;           // Boolean
let nothing = null;        // Null (represents intentional absence of any object value)
let notDefined;            // Undefined (since not initialized)
let uniqueId = Symbol('id'); // Symbol (unique and immutable data type)
let bigInteger = 9007199254740991n; // BigInt (for integers beyond Number.MAX_SAFE_INTEGER)

// -----------------------------------------------
// 6. Variables: let, var, const
// -----------------------------------------------
// **var**:
//   -Function-scoped.
//   - Can be redeclared and updated.
//   - Hoisted to the top of its scope.
// **let**:
//   - Block-scoped.
//   - Cannot be redeclared in the same scope, but can be updated.
// **const**:
//   - Block-scoped.
//   - Cannot be redeclared or updated (for primitive types).
//   - Must be initialized at the time of declaration.

// Examples:

// Using var
var x = 1;
var x = 2; // Redeclaration is allowed with var
x = 3;     // Updating is allowed
console.log(x); // Outputs: 3

// Using let
let y = 1;
// let y = 2; // Error: Cannot redeclare 'y' in the same scope
y = 2; // Allowed: updating the value
console.log(y); // Outputs: 2

// Using const
const z = 1;
// const z = 2; // Error: Cannot redeclare 'z'
// z = 2;       // Error: Assignment to constant variable
console.log(z); // Outputs: 1

// -----------------------------------------------
// 7. Data Types: Strings and Numbers
// -----------------------------------------------
// - **String**: A sequence of characters used to represent text.
//   - Enclosed in single (' '), double (" "), or backticks (` `) for template literals.
// - **Number**: Numeric data type for integers and floating-point numbers.

// String example:
let greeting = "Hello, World!";
console.log(greeting); // Outputs: Hello, World!

// Number example:
let count = 42;
console.log(count); // Outputs: 42

// Template literals (using backticks and ${} for variables):
let name = "Alice";
console.log(`Hello, ${name}!`); // Outputs: Hello, Alice!

// -----------------------------------------------
// 8. Conditional Statements: if, else
// -----------------------------------------------
// Used to perform different actions based on different conditions.

let age = 18;

if (age >= 18) {
    console.log("You are an adult."); // This will run if age is 18 or more
} else {
    console.log("You are a minor.");  // This will run if age is less than 18
}

// Ternary operator (short form of if-else):
let access = age >= 18 ? "Granted" : "Denied";
console.log("Access:", access); // Outputs: Access: Granted

// -----------------------------------------------
// 9. Loops
// -----------------------------------------------
// Loops allow us to execute a block of code multiple times.

// For loop example:
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // Adds i to sum in each iteration
}
console.log("Sum from 1 to 5 is:", sum); // Outputs: Sum from 1 to 5 is: 15

// While loop example:
let n = 5;
while (n > 0) {
    console.log(n);
    n--;
}
// Outputs:
// 5
// 4
// 3
// 2
// 1

// -----------------------------------------------
// 10. Arrays and Objects
// -----------------------------------------------
// Arrays are ordered collections of data.
let numbers = [10, 20, 30, 40, 50];

// Accessing array elements
console.log(numbers[0]); // Outputs: 10

// Looping through an array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Outputs each element in the array
}

// Objects are collections of key-value pairs.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Accessing object properties
console.log(person.firstName); // Outputs: John
console.log(person['lastName']); // Outputs: Doe

// Adding a new property
person.email = "john.doe@example.com";
console.log(person.email); // Outputs: john.doe@example.com

// -----------------------------------------------
// 11. Functions
// -----------------------------------------------
// Functions are reusable blocks of code.

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!

// Function expression
const square = function(number) {
    return number * number;
};

console.log(square(5)); // Outputs: 25

// Arrow function (ES6 syntax)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Outputs: 20

// -----------------------------------------------
// 12. Callbacks
// -----------------------------------------------
// A callback is a function passed into another function as an argument to be executed later.

// Function that accepts a callback
function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

// Callback function
function displayResult(data) {
    console.log("The sum is:", data);
}

// Using the sum function with a callback
sum(5, 10, displayResult); // Outputs: The sum is: 15

// Anonymous callback function
sum(3, 7, function(data) {
    console.log("Result:", data);
}); // Outputs: Result: 10

// -----------------------------------------------
// 13. Functions with Callbacks (Arithmetic Operations)
// -----------------------------------------------
// Performing different arithmetic operations using callbacks.

// Main function that uses a callback for the operation
function calculate(a, b, operation) {
    return operation(a, b);
}

// Callback functions for different operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyOp(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

// Using the calculate function with different operations
console.log(calculate(20, 5, add));        // Outputs: 25
console.log(calculate(20, 5, subtract));   // Outputs: 15
console.log(calculate(20, 5, multiplyOp)); // Outputs: 100
console.log(calculate(20, 5, divide));     // Outputs: 4
console.log(calculate(20, 0, divide));     // Outputs: Error: Division by zero

// -----------------------------------------------
// 14. JavaScript Timing Functions: setTimeout and setInterval
// -----------------------------------------------
// These functions are used to execute code after a delay or repeatedly at intervals.

// setTimeout: Executes a function once after a specified delay.
function sayHello() {
    console.log("Hello after 2 seconds");
}

setTimeout(sayHello, 2000); // Calls sayHello after 2000 milliseconds (2 seconds)

// setInterval: Repeatedly executes a function at specified intervals.
function greetEverySecond() {
    console.log("Hello every second");
}

let intervalId = setInterval(greetEverySecond, 1000); // Calls greetEverySecond every 1000 milliseconds (1 second)

// To stop the interval after some time, we can use clearInterval
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Stopped greeting every second");
}, 5000); // Stops the interval after 5 seconds

// -----------------------------------------------
// 15. Asynchronous JavaScript and the Event Loop
// -----------------------------------------------
// JavaScript handles asynchronous operations using callbacks, promises, and async/await.
// The event loop allows JavaScript to perform non-blocking operations even though it is single-threaded.

// Example using setTimeout to simulate asynchronous behavior:
console.log("Start");

setTimeout(function() {
    console.log("Async operation complete");
}, 1000);

console.log("End");

// Expected Output:
// Start
// End
// Async operation complete

// Explanation:
// - "Start" is logged.
// - setTimeout schedules the callback after 1 second.
// - "End" is logged immediately.
// - After 1 second, "Async operation complete" is logged.

// -----------------------------------------------
// 16. Practical Examples
// -----------------------------------------------

// Greeting a person by their name
let firstName = "Krishankant";
let lastName = "Saraswat";
console.log("Hello " + firstName + " " + lastName); // Outputs: Hello Krishankant Saraswat

// If-else example
let isMarried = true;

if (isMarried) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

// Loop through an array and print even numbers
let arr = [21, 22, 23, 23, 23, 234, 4, 4];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]); // Outputs even numbers in the array
    }
}

// Working with objects
let user1 = {
    name: "Priya",
    gender: "female"
};

console.log(user1["gender"]); // Outputs: female

// -----------------------------------------------
// 17. Error Handling in JavaScript
// -----------------------------------------------
// Use try-catch blocks to handle exceptions and errors gracefully.

try {
    // Code that may throw an error
    let result = calculate(10, 0, divide);
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// In this case, divide function handles division by zero internally,
// so the catch block may not be executed unless an unexpected error occurs.

// -----------------------------------------------
// 18. Conclusion
// -----------------------------------------------
// This comprehensive overview covers the basics of JavaScript, including variables, data types,
// control structures, functions, callbacks, and asynchronous programming.
// Understanding these fundamentals is crucial for developing robust JavaScript applications.

// -----------------------------------------------
// End of Notes
// -----------------------------------------------
