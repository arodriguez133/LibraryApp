let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author} has ${this.pages} pages, ${this.read}`
}


function createBook() {
    const author = document.querySelector('.author');
    const title = document.querySelector('.title');
    const pages = document.querySelector('.pages');

    return new Book(author.value, title.value, pages.value);
};

function addBookToLibrary(e) {
    e.preventDefault();
    myLibrary.push(createBook());
    console.log(myLibrary);
}

let btn = document.querySelector('.add-book');
btn.addEventListener("click", addBookToLibrary);









