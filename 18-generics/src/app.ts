import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// Generics
// allow us to create reusable blocks of code
// which can be used with different types
// when we pass in the object we're not specifying
// exactly what the object should be so TypeScript
// doesn't know when it returns the new object what
// properties were on the object that we passed in
// so it doesn't know a name exists on the object or an
// age exists on the object

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });

// console.log(docOne.name);

// To combat this we can use a generic
// capture the properties on what is passed that is
// passed in
// but this doesn't require that an object must be passed in
// const addUID = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });
// // we can so this since we're not specifying that an
// // object be passed in
// let docTwo = addUID("hello");

// console.log(docOne.name);

// Specifys an object musr be passed in
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });

// console.log(docOne.name);

// let docTwo = addUID({});

// now we can also specify a specific type of object
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.age);

// with interfaces
// interface Resource {
//   uid: number;
//   resourceName: string;
//   data: object;
// }

// this is fine
// const docThree: Resource = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "shaun" }
// }

// this causes an error since data has a type of
// object and not of string
// const docThree: Resource = {
//   uid: 1,
//   resourceName: "person",
//   data: "shaun"
// }

// To fix this we can use a generic
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: "person",
//   data: "shaun"
// }

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "string" },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["bread", "milk", "toilet roll"],
};

console.log(docThree, docFour);
