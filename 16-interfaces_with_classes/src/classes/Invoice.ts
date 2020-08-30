import { HasFormatter } from "../interfaces/HasFormatter.js";

// now the invoice class must follow the structure
// of the HasFormatter interface
// ensures every object we create with this class
// follows the HasFormatter interface structure
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
