var books = JSON.parse(localStorage.getItem("books"));

var bookList = document.getElementById("book-list");

function displayBooks() {
    bookList.innerHTML = ""; 

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
        deleteButton.id = `delete-button-${index}`;

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

document.getElementById("add-book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var imageElement = document.getElementById("image").value;

    books.push({ title, author, imageElement });

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();

    e.target.reset();
});


////! Local Storage 
// localStorage.clear();
console.log(localStorage);
// console.log(localStorage.getItem("imageElement"));
// localStorage.removeItem("");

