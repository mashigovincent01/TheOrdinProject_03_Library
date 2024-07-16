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
    function addBookToLibrary(book){
        //do stuff here
        myLibrary.push(book);
    }
    
    printBooks();
    const button = document.querySelector("#add-book");
    const dialog = document.querySelector("dialog");
    const addBook = document.querySelector("#add");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    const closeButton = document.querySelector("#close");
    addBook.addEventListener("click", (event)=>{
        event.preventDefault();
        if(title.value !== "" && author.value !== "" && pages.value){
            addBookToLibrary(new Book(title.value, author.value, pages.value, read.checked));
            dialog.close();
            printBooks();
            clearForm();
            
        }
    });
    function clearForm(){
        title.value = "";
            author.value = "";
            pages.value = null;
            read.checked = false;
    }
    closeButton.addEventListener("click", (event)=>{
        event.preventDefault();
        dialog.close();
        clearForm();
    })
    button.addEventListener("click", ()=>{
        dialog.showModal();
        //dialog.close()
    });
    // dialog.showModal();
});

