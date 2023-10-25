const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, "Yes")
myLibrary.push(theHobbit)
const books = document.getElementById('books')
updateLibrary(myLibrary)

function updateLibrary(library) {
    for (let book of library) {
        createBookCard(book)
    }
}

function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
}

function createBookCard(book) {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const numPages = document.createElement('p')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book')
    readBtn.classList.add('read')
    removeBtn.classList.add('remove')

    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    numPages.textContent = `${book.numPages} Pages`
    readBtn.textContent = "Read"
    removeBtn.textContent = "Remove"

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(numPages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    books.appendChild(bookCard)
}
