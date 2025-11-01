const myLibrary = [];

//constructor
function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
  this.id = Date.now() + Math.random();
}

//create book and add to library
function addBookToLibrary(author, title, numPages, read) {
  book = new Book(author, title, numPages, read);
  myLibrary.push(book);
}

addBookToLibrary("Steve", "Stevens Journey", 40000, true);
addBookToLibrary("Steve", "Stevens Journey II", 40000, false);


function displayBooks(){
    //Clear container everytime for new additions
    cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = '';

    for (const book of myLibrary){

        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.bookId = book.id;

        const bookX = document.createElement("span");
        bookX.classList.add("bookX");
        bookX.textContent = "X";

        bookX.addEventListener('click', () => {
            const bookId = Number(card.dataset.bookId);
            const index = myLibrary.findIndex(book => book.id === bookId);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                console.log('After splice:', myLibrary);
            }
            displayBooks();
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
            }
            else{
                read.classList.add("read");
            }

        read.addEventListener('click', () => {
            const bookId = Number(card.dataset.bookId);
            const index = myLibrary.findIndex(book => book.id === bookId);
            if (index !== -1) {
                myLibrary[index].read = !(myLibrary[index].read);
            }
            displayBooks();
        });


        card.appendChild(bookX);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(numPages);
        card.appendChild(read);

        cardContainer.appendChild(card);
    }
}

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

    const author = document.getElementById('title').value;
    const title = document.getElementById('author').value;
    const numPages = document.getElementById('page-num').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(author, title, numPages, read);
    displayBooks();
});

displayBooks();