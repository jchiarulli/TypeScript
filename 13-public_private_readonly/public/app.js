"use strict";
// classes
// public is the default access modifier,
// e.g., public client: string is the same as
// client : string
// when we have a private property we can access it
// inside the class using this keyword, e.g., this.details
// but we can't access it outside the class on the instance
// of the class directly
// readonly allows to be able to read the property
// inside the class as well as outside of the class
// but we can't change the property's value inside or outside of the class
// public allows us to be able to read and change the value
// of the property outside of the class
// private allows us to read and change the value of the property
// inside of the class but not outside of the class
// readonly allows to read the property inside and outside of
// the class
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
    // }
    // only works if you use the access modifiers in front of the
    // properties, so now when passing values
    // to the constructor it automatically assigns those
    // values to properties in the class
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = "something" // error since the client property is readonly
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // inv.client = "something else" // error since client property is readonly
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
