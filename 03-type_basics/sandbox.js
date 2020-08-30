// TypeScript infers the type based on the assigned value
var character = "mario";
var age = 30; // number types covers ints and floats
var isBlackBelt = false;
// character = 20;
character = "luigi";
// age = "yoshi";
age = 40;
// isBlackBelt = "yes";
isBlackBelt = true;
// the check to see if diameter is number isn't
// done at run time it's done when the TypeScript
// file is compiled
var circ = function (diameter) {
    return (diameter = Math.PI);
};
console.log(circ(7.5));
