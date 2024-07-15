document.addEventListener("DOMContentLoaded", ()=>{
    const myLibrary = [];

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
    
    function addBookToLibrary(){
        //do stuff here
    
    }
    
    const myBook = new Book("The Hobbit", "J.R.R.", 1, false);
    
});