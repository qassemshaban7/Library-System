document.addEventListener("DOMContentLoaded", () => {
    var editBookIndex = parseInt(localStorage.getItem("editBookIndex"), 10);
    var books = JSON.parse(localStorage.getItem("books")) || [];

        var book = books[editBookIndex];

        document.getElementById("title").value = book.title || "";
        document.getElementById("author").value = book.author || "";
        document.getElementById("image").value = book.imageElement || "";
        document.getElementById("price").value = book.price || "";
        document.getElementById("descreption").value = book.descreption || "";
        document.getElementById("avilablity").value = book.avilablity || "";
});

document.getElementById("editBookForm").addEventListener("submit", (e) => {
    e.preventDefault();

    var editBookIndex = parseInt(localStorage.getItem("editBookIndex"), 10);
    var books = JSON.parse(localStorage.getItem("books")) || [];

    books[editBookIndex] = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        imageElement: document.getElementById("image").value,
        price: document.getElementById("price").value,
        descreption: document.getElementById("descreption").value,
        avilablity: document.getElementById("avilablity").value,
    };

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.removeItem("editBookIndex");

    window.location.href = "index.html";
});

document.getElementById("deleteBook").addEventListener("click", () => {
    var editBookIndex = parseInt(localStorage.getItem("editBookIndex"), 10);
    var books = JSON.parse(localStorage.getItem("books")) || [];

        books.splice(editBookIndex, 1);

        localStorage.setItem("books", JSON.stringify(books));
        localStorage.removeItem("editBookIndex");

        window.location.href = "index.html";
});
