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
            window.location.href = "Details.html?id=" + index;
        });
        div.appendChild(detailsButton);

        var bookButton = document.createElement("button");
        bookButton.innerHTML = '<i class="fa fa-book"></i> Book';
        bookButton.className = "btn btn-book";
        bookButton.addEventListener("click", () => {
            localStorage.setItem("BookaBookIndex", index);
            if (user != null) {
                window.location.href = "AddBookToUser.html?id=" + index;
            } else {
                window.location.href = "login.html";
            }
        });
        div.appendChild(bookButton);

        var favoriteButton = document.createElement("button");
        favoriteButton.innerHTML = '<i class="fa fa-heart"></i> Add to Favorite';
        favoriteButton.className = "btn btn-favorite";
        favoriteButton.addEventListener("click", () => addToFavorites(book));
        div.appendChild(favoriteButton);

        bookList.appendChild(div);
        
    });
}

function addToFavorites(book) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyExists = favorites.some(fav => fav.title === book.title);

    if (!alreadyExists) {
        favorites.push(book);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Book added to favorites!");
    } else {
        alert("This book is already in favorites.");
    }
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
