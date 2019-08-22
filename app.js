// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// Ui constructor
function UI() {}
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById("book-list");
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>`;
    list.appendChild(row);
}
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// event listener
document.getElementById('book-form').addEventListener('submit', function (e) {
    // get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // instantiate a new book
    const book = new Book(title, author, isbn);

    // instantiate a UI object
    const ui = new UI();

    // add book to list
    ui.addBookToList(book);
    // clear inputs after submittion
    ui.clearFields()


    console.log(book)
    e.preventDefault()
})