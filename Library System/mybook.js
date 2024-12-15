function displayBooks() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You need to be logged in to view books.");
        return;
    }

    var allBooks = JSON.parse(localStorage.getItem("books")) || [];
    var userBooks = allBooks.filter(book => book.userName === loggedInUser);

    bookList.innerHTML = "";

    userBooks.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author}`;
        div.appendChild(bookInfo);

        var img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);ق

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            allBooks.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(allBooks));
            displayBooks();
        });

        div.appendChild(deleteButton);
        bookList.appendChild(div);
    });
}
