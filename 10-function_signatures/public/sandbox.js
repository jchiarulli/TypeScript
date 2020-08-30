"use strict";
// let greet: Function;
// example 1
var greet;
// Explicitly says we're returning void
// greet = (name: string, greeting: string): void => {
//   console.log(`${name} says ${greeting}`);
// };
// TypeScript infers we're returning void
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
