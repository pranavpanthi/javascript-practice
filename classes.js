class Book {
    constructor(title, author, pages,isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
}

let myBook = new Book ('The Meditation', 'Marcus Alerius', 250, true);
let mysecondBook = new Book ('Decipline', 'Prahlad Panthi', 150, true);
let mythirdBook = new Book ('Dedication', 'Pranav Panthi', 100, false);

console.log(myBook);
console.log(mysecondBook);
console.log(mythirdBook);
