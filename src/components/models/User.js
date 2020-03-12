export class User {
    constructor(id, createdAt, firstName, lastName, creditIndicator) {
        this.id = id;
        this.createdAt = new Date(createdAt);
        this.firstName = firstName;
        this.lastName = lastName;
        this.creditIndicator = creditIndicator;
    }
}