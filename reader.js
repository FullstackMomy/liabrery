export class Reader {
    firstName;
    lastName;
    borrowedBooks;
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.borrowedBooks = [];   
    }
}