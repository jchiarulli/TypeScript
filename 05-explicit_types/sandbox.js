// explicit types
var character;
var age;
var isLoggedIn;
// age = "luigi";
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
// let ninjas: string[];
// ninjas = [10, 23];
names = ["yoshi", "mario"];
// ninjas.push("shaun");
var ninjas = []; // allows us to use the push method
// union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = false
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
// ninjaOne = "hello"
// ninjaOne = [] // allowed since array is a type of object
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "black"
};
// ninjaTwo = {
//   name: "mario",
//   age: 20,
//   beltColor: "black",
//   skills: "sneaking"
// }
