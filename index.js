document.addEventListener("DOMContentLoaded", ()=>{
    const myLibrary = [
        new Book("Title", "J.K Rolling", 200, true),
        new Book("The punisher", "G Rabothata", 100, false),
        new Book("Drama", "OK Hotane", 1, false)
    ];

    function Book(title, author, pages, read){
        //constructor
        this.title = title; //title of the book
        this.author = author; ///autor 
        this.pages = pages; //no of pages
        this.read = read; //did you read the book
    
        this.info = function(){
            return `${this.title} by ${this.author}, ${this.pages} ${pages > 1 ? "pages" : "page"}, ${read ? "read" : "not read yet"}. `
        }
    }
    
    function createCard(book){
        return `
        <div class="card">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <h3>${book.pages} ${book.pages > 1 ? "pages" : "page"}</h3>
            <h3>Read: ${book.read ? "Yes" : "No"}</h3>
        </div>
        `
    }
    function printBooks(){
        const main = document.querySelector(".main");
        main.innerHTML = "";

        myLibrary.forEach((book)=>{
            main.innerHTML += createCard(book);
        });
    }
    function addBookToLibrary(){
        //do stuff here
    
    }
    
    printBooks();
    
});