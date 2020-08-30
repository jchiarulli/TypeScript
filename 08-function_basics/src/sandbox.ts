// let greet = () => {
//     console.log("hello, world");
// }

// greet = "hello";

let greet: Function;

greet = () => {
  console.log("hello, again");
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);
// add(5, "10");

// returns a void value since nothing is returned
const sum = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

sum(5, 10);
sum(5, 10, 20);
sum(5, 10, "20");

// TypeScript infers that result has a type of number
const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);
// result = "something else";

// Explicitly state the return type
const subtraction = (a: number, b: number): number => {
  return a + b;
};

let total = subtraction(10, 7);
// result = "something else";
