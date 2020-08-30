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

// Enums
// Special type in TypeScript that allows us to
// store a set of constants or keywords and
// associate them with a numeric value

// here when defining objects we can pass through
// a specific number for the resource type which
// would thennrepresent a certain type of resource
// E.g., resourceType 3 could be a book, 4 could be a person,
// 5 a film, 6 a video
// This can be hard to maintain though
// interface Resource<T> {
//   uid: number;
//   resourceType: number;
//   data: T;
// }

// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: 3,
//   data: { title: "name of the wind" },
// };

// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: 4,
//   data: { name: "yoshi" },
// };

// we can use an enum which is a way to specify a
// descriptive constants and associate each one with a
// numeric value
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};

// prints the index for the resource type
console.log(docOne, docTwo);
