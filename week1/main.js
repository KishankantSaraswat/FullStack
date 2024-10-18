// console.log("hi kk")
// console.log("kese ho")
// // Greet a person by taking is name 
// // var firstName="Krishankant"
// // var lastName="Saraswat"

// console.log("Hello " + firstName + " " + lastName);

// if else 

// let firstName = "kk"
// let isMaried=true

// if(isMaried){
//     console.log(firstName + " is married")
// }else{
//     console.log(firstName + " is not married")
// }

// // loop
// let ans=0;
// for( i=0;i<10;i++){
// ans+=i;
// }
// console.log(ans);   


// // let person="kk"
// let age=20
// let arr=[21,22,23,23,23,234,4,4]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }

// let person1="kk";
// let gender1="male";

// let person2="ram";
// let gender2="male";

// let person3="priya";
// let gender3="female";

// let person=["kk","ram","priya"];
// let gender=["male","male","female"]

// for(i=0;i<gender.length;i++){


// if(gender=="male"){
//     console.log(person[i])
// }
// }

// const user2 = {
//     name: "Ram",
//     age: 30,
//     gender: "male"
// };

// function greetUser(user) {
//     console.log(`Hello ${user.name}, you are ${user.age} years old and you are a ${user.gender}`);
// }

// greetUser(user2);


// function sum(a,b){
//     return a+b;


// }

// const k=sum(5,5);
// console.log(k)


// // Function that sums two numbers and calls a callback function with the result
// function sum(num1, num2, fnToCall) {
//     let res = num1 + num2;  // Sum of the two numbers
//     fnToCall(res);          // Call the callback function with the result
// }

// // Function to display the result of the sum
// function displayResult(data) {
//     console.log("Result of sum is: " + data); // Displaying the result
// }

// // Function to display result with a different message
// function displayResultPassive(data) {
//     console.log("Sum's result is: " + data); // Displaying the result with another message
// }

// // Make sure to call sum with valid functions
// sum(10, 20, displayResult);            // Output: Result of sum is: 30

// sum(5, 15, displayResultPassive);      // Output: Sum's result is: 20


// Function to calculate different arithmetic operations
// function cal(a, b, type) {
//     if (type === "sum") {
//         return a + b; // Sum operation
//     } else if (type === "subtract") {
//         return a - b; // Subtraction operation
//     } else if (type === "multiply") {
//         return a * b; // Multiplication operation
//     } else if (type === "divide") {
//         if (b !== 0) { // Avoid division by zero
//             return a / b; // Division operation
//         } else {
//             return "Error: Division by zero"; // Error message
//         }
//     } else {
//         return "Error: Invalid operation type"; // Error message for unsupported operations
//     }
// }

// // Example usage:
// console.log(cal(10, 5, "sum"));       // Output: 15
// console.log(cal(10, 5, "subtract"));  // Output: 5
// console.log(cal(10, 5, "multiply"));  // Output: 50
// console.log(cal(10, 5, "divide"));    // Output: 2
// console.log(cal(10, 0, "divide"));    // Output: Error: Division by zero
// console.log(cal(10, 5, "modulus"));   // Output: Error: Invalid operation type


// // Function to calculate using a callback for the operation
// function cal(a, b, callback) {
//     return callback(a, b); // Call the callback function with a and b
// }

// // Callback function for addition
// function sum(a, b) {
//     return a + b;
// }

// // Callback function for subtraction
// function subtract(a, b) {
//     return a - b;
// }

// // Callback function for multiplication
// function multiply(a, b) {
//     return a * b;
// }

// // Callback function for division
// function divide(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "Error: Division by zero";
//     }
// }

// // Example usage:
// console.log(cal(10, 5, sum));         // Output: 15 (calls sum)
// console.log(cal(10, 5, subtract));    // Output: 5 (calls subtract)
// console.log(cal(10, 5, multiply));    // Output: 50 (calls multiply)
// console.log(cal(10, 5, divide));      // Output: 2 (calls divide)
// console.log(cal(10, 0, divide));      // Output: Error: Division by zero

// function greetkk() {
//     console.log("hello kk");
// }

// // Use setInterval to call greetkk every 1 second (1000 milliseconds)
// setInterval(greetkk, 1000);


// function greetkk() {
//     console.log("hello kk");
// }

// // Use setTimeout to call greetkk once after 1 second
// setTimeout(greetkk, 1000);

