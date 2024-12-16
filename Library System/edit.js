document.addEventListener("DOMContentLoaded", () => {
    var editBookIndex = parseInt(localStorage.getItem("editBookIndex"), 10);
    if (isNaN(editBookIndex) || editBookIndex < 0) {
        console.error("Invalid book index");
        return;
    }

    var books = JSON.parse(localStorage.getItem("books")) || [];
    if (!books[editBookIndex]) {
        console.error("Book not found");
        return;
    }

    var book = books[editBookIndex];
    document.getElementById("title").value = book.title || "";
    document.getElementById("author").value = book.author || "";
    document.getElementById("image").value = book.imageElement || "";
    document.getElementById("price").value = book.price || "";
    document.getElementById("descreption").value = book.descreption || "";
    document.getElementById("avilablity").value = book.avilablity || "";

    var editBookForm = document.getElementById("editBookForm");
    if (editBookForm) {
        editBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            books[editBookIndex] = {
                title: document.getElementById("title").value,
                author: document.getElementById("author").value,
                imageElement: document.getElementById("image").value,
                price: document.getElementById("price").value,
                descreption: document.getElementById("descreption").value,
                avilablity: document.getElementById("avilablity").value,
            };

            localStorage.setItem("books", JSON.stringify(books));
            window.location.href = "index.html";
        });
    } else {
        console.error("Edit book form not found");
    }
});