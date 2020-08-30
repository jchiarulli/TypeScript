// interfaces
// an interface allows us to enforce a certain structure
// of a class or an object we can use it to describe
// the properties, methods, types of properties, and the return
// types of the methods are
// sounds like a class but we don't use an interface
// to generate objects or create new objects based on
// the interface we just use it to enforce a certain structure
// within classes or bojects

// if we declare a variable to be an IsPerson then
// it must have these properties and it must have these
// methods
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// we don't have to declare the types for the
// functions since TypeScript will infer them
// we're just being explicit
const me: IsPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

console.log(me);

// let someone: IsPerson; // enforces the rules of the IsPerson interface on the variable

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
