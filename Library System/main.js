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
            books.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(books));
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
                window.location.href = "AddBookToUser.html?id=" + index;
            } else {
                window.location.href = "login.html";
            }
        });
        buttonContainer.appendChild(bookButton);

        div.appendChild(buttonContainer);

        bookList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", displayBooks);



const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');

function getBooksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const books = getBooksFromLocalStorage();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(filteredBooks, searchTerm);
});

function displaySearchResults(results, searchTerm) {
    searchResults.innerHTML = '';

    if (searchTerm.trim() === '') {
        searchResults.style.display = 'none';
        return;
    }

    results.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.title; 
        li.addEventListener('click', () => {
            searchBar.value = book.title; 
            searchResults.innerHTML = ''; 
            searchResults.style.display = 'none'; 
        });
        searchResults.appendChild(li);
    });

    if (results.length > 0) {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}


////! Local Storage 
// localStorage.clear();
console.log(localStorage);
// console.log(localStorage.getItem("avilablity"));
// localStorage.removeItem("");