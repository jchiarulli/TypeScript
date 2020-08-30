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
class Invoice {
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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = "something" // error since the client property is readonly
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  // inv.client = "something else" // error since client property is readonly
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
