var books = JSON.parse(localStorage.getItem("books"));

var bookList = document.getElementById("book-list");

function displayBooks() {
    const bookList = document.getElementById("book-list");
    if (!bookList) {
        console.error("Book list container not found.");
        return;
    }

    const books = JSON.parse(localStorage.getItem("books")) || [];
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const div = document.createElement("div");
        div.className = "book-card";

        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author}`;
        div.appendChild(bookInfo);

        const img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);

        const deleteButton = document.createElement("button");
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
    const addBookForm = document.getElementById("add-book-form");
    if (addBookForm) {
        addBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const imageElement = document.getElementById("image").value;
            const avilablity = document.getElementById("avilablity").value;

            const books = JSON.parse(localStorage.getItem("books")) || [];
            books.push({ title, author, imageElement, avilablity });

            localStorage.setItem("books", JSON.stringify(books));

            e.target.reset();
        });
    }
});



////! Local Storage 
// localStorage.clear();
// console.log(localStorage);
// console.log(localStorage.getItem("avilablity"));
// localStorage.removeItem("");

