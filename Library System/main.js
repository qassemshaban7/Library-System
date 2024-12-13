var books = JSON.parse(localStorage.getItem("books"));

var bookList = document.getElementById("book-list");

function displayBooks() {

    var books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author}`;
        div.appendChild(bookInfo);

        var img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            books.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(books));
            displayBooks();
        });

        div.appendChild(deleteButton);
        bookList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", displayBooks);


document.addEventListener("DOMContentLoaded", displayBooks);

document.addEventListener("DOMContentLoaded", () => {
    var addBookForm = document.getElementById("add-book-form");
    if (addBookForm) {
        addBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            var title = document.getElementById("title").value;
            var author = document.getElementById("author").value;
            var imageElement = document.getElementById("image").value;
            var avilablity = document.getElementById("avilablity").value;

            var loggedInUser = localStorage.getItem("loggedInUser");
            if (!loggedInUser) {
                alert("You need to be logged in to add a book.");
                return;
            }
            var books = JSON.parse(localStorage.getItem("books")) || [];
            var userName = "";
            books.push({ title, author, imageElement, avilablity , userName: loggedInUser });

            localStorage.setItem("books", JSON.stringify(books));

            e.target.reset();
        });
    }
});







////! Local Storage 
// localStorage.clear();
console.log(localStorage);
// console.log(localStorage.getItem("avilablity"));
// localStorage.removeItem("");