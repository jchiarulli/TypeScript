"use strict";
// let greet = () => {
//     console.log("hello, world");
// }
// greet = "hello";
var greet;
greet = function () {
    console.log("hello, again");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// add(5, "10");
// returns a void value since nothing is returned
var sum = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
sum(5, 10);
sum(5, 10, 20);
sum(5, 10, "20");
// TypeScript infers that result has a type of number
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// result = "something else";
// Explicitly state the return type
var subtraction = function (a, b) {
    return a + b;
};
var total = subtraction(10, 7);
// result = "something else";
