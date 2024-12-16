var user = localStorage.getItem("loggedInUser");

document.addEventListener("DOMContentLoaded", () => {
    var addBookForm = document.getElementById("add-book-form");
    if (addBookForm) {
        addBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            var title = document.getElementById("title").value;
            var author = document.getElementById("author").value;
            var imageElement = document.getElementById("image").value;
            var price = document.getElementById("price").value;
            var descreption = document.getElementById("descreption").value;
            var avilablity = document.getElementById("avilablity").value;

            if (!user) {
                alert("You need to be logged in to add a book.");
                return;
            }

            var books = JSON.parse(localStorage.getItem("books")) || [];
            if (!books.some(book => book.title === title && book.author === author)) {
                books.push({ title, author, imageElement, price, descreption, avilablity, userName: user });
                localStorage.setItem("books", JSON.stringify(books));
                e.target.reset();
                window.location.href = "index.html";
            }
        });
    }
});
