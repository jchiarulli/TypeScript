"use strict";
// const anchor = document.querySelector("a");
// gives an error since anchor.href might be null
// because TypeScript doesn't know if there is an
// a tag in the index.html file
// console.log(anchor.href);
// To combat this error we can do the following check
// if (anchor) {
//   console.log(anchor.href);
// }
// or we can add on ! if we're certain index.html
// contains an a tag
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// When using TypeScript for DOM interaction it
// automatically contains special types for every DOM
// element, so if we hover over anchor we can see
// const anchor: HTMLAnchorElement which is the
// special type of this variable, so when we use
// the anchor variable TypeScript knows all of the
// different properties and methods on that types
// and it makes them available to us in intellSense
// const form = document.querySelector("form")!;
// const form = document.querySelector(".new-item-form")!;
// When we use "a" or "form" TypeScript knows the type
// we're grabbing so it will gives us const anchor: HTMLAnchorElement and
// const form: HTMLFormElement, but when passing in a class
// could be applied to any different HTML element in the page, so
// it doesn't know it's a form just that it is some kine of
// Element
// To combat this we can use typecasting to say what kind of type
// the element is going to be
// We don't need to include ! since it's always going
// to have the type we cast it to
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// e is a type Event which is built into TypeScript
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
