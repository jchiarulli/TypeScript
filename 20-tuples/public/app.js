import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// Tuples
// similar to arrays since we use square brackets
// to define them and they can also use array methods
// but there is a major difference
// the types of data in each position in a tuple
// is fixed once it's been initialized
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
let tup = ["ryu", 25, true];
// tup[0] = false;
tup[0] = "ken";
// tup[1] = "30";
tup[1] = 30;
let student;
// student = [234234, "ken"]
student = ["chun-li", 223423];
