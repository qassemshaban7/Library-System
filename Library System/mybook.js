// function displayBooks() {
//     var loggedInUser = localStorage.getItem("loggedInUser");
//     if (!loggedInUser) {
//         alert("You need to be logged in to view books.");
//         return;
//     }

//     var allBooks = JSON.parse(localStorage.getItem("books")) || [];
//     var userBooks = allBooks.filter(book => book.userName === loggedInUser);

//     bookList.innerHTML = "";

//     userBooks.forEach((book, index) => {
//         var div = document.createElement("div");
//         div.className = "book-card";

//         var bookInfo = document.createElement("p");
//         bookInfo.textContent = `${book.title} - ${book.author}`;
//         div.appendChild(bookInfo);

//         var img = document.createElement("img");
//         img.src = book.imageElement;
//         div.appendChild(img);

//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";

//         deleteButton.addEventListener("click", () => {
//             allBooks.splice(index, 1);
//             localStorage.setItem("books", JSON.stringify(allBooks));
//             displayBooks();
//         });

//         div.appendChild(deleteButton);
//         bookList.appendChild(div);
//     });
// }


var user = localStorage.getItem("loggedInUser");
var bookList = document.getElementById("book-list");

function displayBooks() {
    var books = JSON.parse(localStorage.getItem("books")) || [];
    if (!bookList) {
        console.error("Book list element not found");
        return;
    }
    
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author} - ${book.price}$`;
        div.appendChild(bookInfo);

        var img = document.createElement("img");
        img.src = book.imageElement;
        div.appendChild(img);

        var detailsButton = document.createElement("button");
        detailsButton.textContent = "more";
        detailsButton.addEventListener("click", () => {
            localStorage.setItem("DetailsBookIndex", index); 
            window.location.href = "Details.html?id=" + index;
        });

        div.appendChild(detailsButton);

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
        div.appendChild(bookButton); 
        bookList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", displayBooks);