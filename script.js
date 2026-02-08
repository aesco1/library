

class Library{
    #catalog = []

    get catalog(){
        return this.#catalog
    }

    addBookToLibrary(author, title, numPages, read){
        const newBook = new Book(author, title, numPages, read)
        this.#catalog.push(newBook);
    }

    //removeBook()
}


class Book{
    constructor(author, title, numPages, read){
        this.author = author;
        this.title = title;
        this.numPages = numPages;
        this.read = read;
        this.id = Date.now() + Math.random();
    }
}

class DisplayController{

    constructor(library){
        this.library = library;
        this.initListeners();
    }

    addCard(book){
        const cardContainer = document.getElementById('card-container');

        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.bookId = book.id;

        const bookX = document.createElement("span");
        bookX.classList.add("bookX");
        bookX.textContent = "X";

        bookX.addEventListener('click', () => {
            const bookId = Number(card.dataset.bookId);
            const index = this.library.catalog.findIndex(book => book.id === bookId);
            if (index !== -1) {
                this.library.catalog.splice(index, 1);
                console.log('After splice:', myLibrary);
            }
            this.displayBooks();
        });

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("h2");
        author.classList.add("author");
        author.textContent = `Author: ${book.author}`;

        const numPages = document.createElement("h2");
        numPages.classList.add("numPages");
        numPages.textContent = `Pages: ${book.numPages}`;

        //toggle read
        const read = document.createElement("div");
            if(book.read === false){
                read.classList.add("not-read");
            }else{
                read.classList.add("read");
            }

        read.addEventListener('click', () => {
            const bookId = Number(card.dataset.bookId);
            const index = this.library.catalog.findIndex(book => book.id === bookId);
            if (index !== -1) {
                this.library.catalog[index].read = !(this.library.catalog[index].read);
            }
            this.displayBooks();
        });


        card.appendChild(bookX);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(numPages);
        card.appendChild(read);

        cardContainer.appendChild(card);

    }

    displayBooks(){
         //Clear container everytime for new additions
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = '';

        let currentCatalog = this.library.catalog
        currentCatalog.forEach(book => {
            this.addCard(book);
        })
    }

    // init for event listeners
    initListeners(){
        
        //Modal listeners
        const modal = document.getElementById('modal');
        const openBtn = document.getElementById('openModal');
        const closeBtn = document.getElementById('closeModal');
        const modalX = document.getElementById('modalX');
        const form = document.getElementById('book-form');

        // Open modal
        openBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        //modal x
        modalX.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const author = document.getElementById('author').value;
            const title = document.getElementById('title').value;
            const numPages = document.getElementById('page-num').value;
            const read = document.getElementById('read').checked;

            this.library.addBookToLibrary(author, title, numPages, read);
            this.displayBooks();
        });
    }

}

const myLibrary = new Library();
const display = new DisplayController(myLibrary);





