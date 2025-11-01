const myLibrary = [];


//constructor
function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;

}

//create book and add to library
function addBookToLibrary(author, title, numPages, read) {
  book = new Book(author, title, numPages, read);
  myLibrary.push(book);
}

addBookToLibrary("Steve", "Stevens Journey", 40000, true);
addBookToLibrary("Steve", "Stevens Journey II", 40000, false);


function displayBooks(){
    //get at beginning since we always refer to it
    cardContainer = document.getElementById("card-container");

    for (const book of myLibrary){
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("h2");
        author.classList.add("author");
        author.textContent = `Author: ${book.author}`;

        const numPages = document.createElement("h2");
        numPages.classList.add("numPages");
        numPages.textContent = `Pages: ${book.numPages}`;

        const read = document.createElement("div");
        read.textContent = "Read";
            if(book.read === false){
                read.classList.add("not-read");
            }
            else{
                read.classList.add("read");
            }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(numPages);
        card.appendChild(read);

        cardContainer.appendChild(card);
    }
}

displayBooks()