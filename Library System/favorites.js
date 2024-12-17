var favoriteList = document.getElementById("favorite-list");

function displayFavorites(favorites = null) {
    var allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var displayableFavorites = favorites || allFavorites;

    if (!favoriteList) {
        console.error("Favorite list element not found");
        return;
    }

    favoriteList.innerHTML = "";

    displayableFavorites.forEach((book, index) => {
        var div = document.createElement("div");
        div.className = "book-card";

        var bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author} - ${book.price}$`;
        div.appendChild(bookInfo);

        var img = document.createElement("img");
        img.src = book.imageElement;
        img.alt = "Book Cover";
        div.appendChild(img);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeFromFavorites(index));
        div.appendChild(removeButton);

        favoriteList.appendChild(div);
    });
}

function removeFromFavorites(index) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
}

document.addEventListener("DOMContentLoaded", () => displayFavorites());

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const filteredFavorites = favorites.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displayFavorites(filteredFavorites);
});
