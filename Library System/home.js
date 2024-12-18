var user = localStorage.getItem("loggedInUser");
var bookList = document.getElementById("book-list");

function displayBooks(books = null) {
    var allBooks = JSON.parse(localStorage.getItem("books")) || [];

    var displayableBooks = books || allBooks;

    if (!bookList) {
        console.error("Book list element not found");
        return;
    }

    bookList.innerHTML = "";

    displayableBooks.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author} - ${book.price}$`;
        div.appendChild(bookInfo);

        var img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);

        var detailsButton = document.createElement("button");
        detailsButton.innerHTML = '<i class="fa fa-info-circle"></i> More';
        detailsButton.className = "btn btn-details";
        detailsButton.addEventListener("click", () => {
            localStorage.setItem("DetailsBookIndex", index);
            window.location.href = "login.html " ;
        });
        div.appendChild(detailsButton);

        bookList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => displayBooks());

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const books = JSON.parse(localStorage.getItem("books")) || [];

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
});
