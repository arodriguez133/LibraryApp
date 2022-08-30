let myLibrary = [];

function Book() {
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author} has ${this.pages} pages, ${this.read}`
}

function Book1(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book1.prototype = Object.create(Book.prototype);

let book1 = new Book1('Lord of The Rings', 'JRR Tolkein', '1178', 'has not read');



function addBookToLibrary(book) {
    if (myLibrary.length > 1) {
        return ` ${myLibrary.push(book)} book's in the library`
    } else {
        return ` ${myLibrary.push(book)} book in the library`
    };
}

console.log(addBookToLibrary(book1));
console.log(myLibrary);
