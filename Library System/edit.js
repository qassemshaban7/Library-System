document.addEventListener("DOMContentLoaded", () => {
    var editBookIndex = localStorage.getItem("editBookIndex");
    if (editBookIndex !== null) {
        var books = JSON.parse(localStorage.getItem("books")) || [];
        var book = books[editBookIndex];

        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("image").value = book.imageElement;
        document.getElementById("price").value = book.price;
        document.getElementById("descreption").value = book.description;
        document.getElementById("avilablity").value = book.avilablity;
    }

    var editBookForm = document.getElementById("add-book-form");
    editBookForm.addEventListener("submit", (e) => {
        e.preventDefault();

        var books = JSON.parse(localStorage.getItem("books")) || [];
        books[editBookIndex] = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            imageElement: document.getElementById("image").value,
            price: document.getElementById("price").value,
            description: document.getElementById("descreption").value,
            avilablity: document.getElementById("avilablity").value,
        };

        var loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) {
            alert("You need to be logged in to add a book.");
            return;
        }
        
        localStorage.setItem("books", JSON.stringify(books));
        localStorage.removeItem("editBookIndex"); 
        // alert("book Edited Successful!");
        window.location.href = "/Library System/index.html"; 
    });
});
