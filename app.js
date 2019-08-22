// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// Ui constructor
function UI() {}
// event listener
document.getElementById('book-form').addEventListener('submit', function (e) {
    console.log('test'),
        e.preventDefault()
})