
const myLibrary = [];

// Page Elements
const books = document.getElementById('books');
const addBookBtn = document.querySelector('.add-book');
const modal = document.querySelector('#book-dialog');
const modalCloseBtn = document.querySelector('#modal-close');
const bookForm = document.querySelector('#book-form');

// Objects
function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

// User Interface
addBookBtn.addEventListener("click", () => {
    modal.showModal();
  });

modalCloseBtn.addEventListener("click", () => {
    modal.close();
    bookForm.reset();
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
});


// Functions
function updateLibrary(library) {
    // Clear the book grid
    books.innerHTML = '';
    // Loop through library and generate book cards for each book.
    for (const [index, book] of library.entries()) {
        createBookCard(book, index);
    }
}

function createBookCard(book, index) {
    // Create elements
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const numPages = document.createElement('p')
    const buttonContainer = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    // Assign element contents and classes
    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    numPages.textContent = `${book.numPages} Pages`
    removeBtn.textContent = "Remove"
    bookCard.classList.add('book')
    removeBtn.classList.add('remove')
    buttonContainer.classList.add('button-container')

    // Assign book index to the buttons for use later
    readBtn.dataset.index = index;
    removeBtn.dataset.index = index;
    
    if (book.read === true){
        readBtn.textContent = "Read"
        readBtn.classList.add('read')
    }
    else {
        readBtn.textContent = "Not Read";
        readBtn.classList.add('unread')
    }

    // Add event listeners for buttons
    readBtn.addEventListener("click", (e) => {
        toggleRead(e);
    });
    removeBtn.addEventListener("click", (e) => {
        removeBook(e);
    });
    
    // Assemble element and children
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(numPages)
    bookCard.appendChild(buttonContainer)
    buttonContainer.appendChild(readBtn)
    buttonContainer.appendChild(removeBtn)
    books.appendChild(bookCard)
}

function addBook() {
    // Get form element values
    const formElements = bookForm.elements;
    const title = formElements["title"].value;
    const author = formElements["author"].value;
    const numPages = formElements["numPages"].value;
    const read = formElements["check-read"].checked;
    // Add book to the array
    const newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook)
    // Close and reset the form, and re-render the book grid
    modal.close();
    bookForm.reset();
    updateLibrary(myLibrary);
}

function toggleRead(e) {
    const bookIndex = e.srcElement.dataset.index;
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    updateLibrary(myLibrary);
}

function removeBook(e) {
    const bookIndex = e.srcElement.dataset.index;
    myLibrary.splice(bookIndex, 1);
    updateLibrary(myLibrary);
}