// now the invoice class must follow the structure
// of the HasFormatter interface
// ensures every object we create with this class
// follows the HasFormatter interface structure
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
