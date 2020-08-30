// only modern browsers support the es6 module system
// so we can use them in TypeScript as well but
// TypeScript doesn't compile the es6 module system
// into something older browsers understand as well
// if using webpack you can sidesep this issue
// by bundling the code into one single file
// see webpack with TypeScriot tutorial series
// Note we're importing from Invoice.js not Invoice.ts
// because we're compiling this into JavaScript which
// the browser will use when importing
// Drawbacks
// Only modern browsers support the module system
// and the code is not being bundled into a single file
// the browser is still loading separate files and
// making multiple requests
// To fizx this we can use Webpack to bundle the code
// into a single file when its completed, so we'll
// only have one network request and all browsers will
// be supported too
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
