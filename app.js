
const myLibrary = [];

// Page Elements
const books = document.getElementById('books')
const addBookBtn = document.querySelector('.add-book')
const modal = document.querySelector('#book-dialog')
const modalCloseBtn = document.querySelector('#modal-close')
const bookForm = document.querySelector('#book-form')

// Test code to add a book to the page
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, false)
// myLibrary.push(theHobbit)
// updateLibrary(myLibrary)

// User Interface Listeners
addBookBtn.addEventListener("click", () => {
    modal.showModal();
  });

modalCloseBtn.addEventListener("click", () => {
    modal.close();
    bookForm.reset()
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formElements = bookForm.elements;
    const title = formElements["title"].value;
    const author = formElements["author"].value;
    const numPages = formElements["numPages"].value;
    const read = formElements["check-read"].checked;

    const newBook = new Book(title, author, numPages, read);
    console.log(newBook);
    myLibrary.push(newBook)
    console.log(bookForm.elements["check-read"].checked)
    modal.close();
    bookForm.reset();
    updateLibrary(myLibrary);
});


// Functions
function updateLibrary(library) {
    books.innerHTML = '';
    for (let book of library) {
        createBookCard(book);
    }
}

function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
}

function createBookCard(book) {
    // Create elements
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const numPages = document.createElement('p')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    // Assign element contents and classes
    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    numPages.textContent = `${book.numPages} Pages`
    removeBtn.textContent = "Remove"
    bookCard.classList.add('book')
    removeBtn.classList.add('remove')
    
    if (book.read === true){
        readBtn.textContent = "Read"
        readBtn.classList.add('read')
    }
    else {
        readBtn.textContent = "Not Read";
        readBtn.classList.add('unread')
    }
    
    // Assemble element and children
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(numPages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    books.appendChild(bookCard)
}

function addBook(event) {


}
