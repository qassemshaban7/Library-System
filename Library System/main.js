var user = localStorage.getItem("loggedInUser");
var bookList = document.getElementById("book-list");

function displayBooks(books = null) {
    var allBooks = JSON.parse(localStorage.getItem("books")) || [];
    var booksToDisplay = books || allBooks;

    if (!bookList) {
        console.error("Book list element not found");
        return;
    }

    bookList.innerHTML = "";

    booksToDisplay.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);

        var titleElement = document.createElement("p");
        titleElement.textContent = `Name: ${book.title}`;
        div.appendChild(titleElement);

        var priceElement = document.createElement("p");
        priceElement.textContent = `Price: ${book.price}$`;
        div.appendChild(priceElement);

        var hrElement = document.createElement("hr");
        div.appendChild(hrElement);
        
        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            allBooks.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(allBooks));
            displayBooks();
        });
        buttonContainer.appendChild(deleteButton);

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            localStorage.setItem("editBookIndex", index);
            window.location.href = "EditBook.html";
        });
        buttonContainer.appendChild(editButton);

        var detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.addEventListener("click", () => {
            localStorage.setItem("DetailsBookIndex", index);
            window.location.href = "Details.html?id=" + index;
        });
        buttonContainer.appendChild(detailsButton);

        var bookButton = document.createElement("button");
        bookButton.textContent = "Book";
        bookButton.addEventListener("click", () => {
            localStorage.setItem("BookaBookIndex", index);
            if (user != null) {
                window.location.href = "AddDookToUser.html?id=" + index;
            } else {
                window.location.href = "login.html";
            }
        });
        buttonContainer.appendChild(bookButton);

        div.appendChild(buttonContainer);
        bookList.appendChild(div);
    });
}

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const books = JSON.parse(localStorage.getItem("books")) || [];

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
});

document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});



////! Local Storage 
// localStorage.clear();
console.log(localStorage);
// console.log(localStorage.getItem("avilablity"));
// localStorage.removeItem("");
