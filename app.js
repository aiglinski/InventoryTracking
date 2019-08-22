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
UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove
    }
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
    ui.deleteBook(e.target);

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Sorry, Please fill in Fields correctly', 'error');
    } else {
        // add book to list
        ui.addBookToList(book);
        ui.showAlert('Book Added', 'success');
        // clear inputs after submittion
        ui.clearFields()
    }

    e.preventDefault()
});
// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI()
    ui.deleteBook(e.target);
    ui.showAlert('Book removed', 'success')
    e.preventDefault();
})