/*
// bookshop.js
console.log("Indlæste bøger:", books);

// 
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const bookList = document.getElementById("book-list");

  // Viser alle bøger på siden
  displayBooks(books);

  // søgefunktion
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();

    // Filtrér bøger baseret på match i titel, forfatter eller bruger
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.forfatter.toLowerCase().includes(searchTerm) ||
      book.user.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
  });
});

// Funktion til at vise bøgerne i html
function displayBooks(bookList) {
  const container = document.getElementById("book-list");
  container.innerHTML = ""; 

  if (bookList.length === 0) {
    container.innerHTML = "<p>Ingen bøger matcher din søgning.</p>";
    return;
  }

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
    <img src="${book}" alt="${book.title}" class="book-cover">

        <h3>${book.title}</h3>
      <p><strong>Forfatter:</strong> ${book.forfatter}</p>
      <p><strong>Pris:</strong> ${book.pris} kr.</p>
      <p><strong>Stand:</strong> ${book.stand}</p>
      <p><strong>Sprog:</strong> ${book.sprog}</p>
      <p><strong>Udgivelsesår:</strong> ${book.årstal}</p>
      <p><strong>ISBN:</strong> ${book.isbnnr}</p>
      <p><strong>Bruger:</strong> ${book.user}</p>
    `;

    container.appendChild(card);
  });
}
*/

// bookshop.js //
// bookshop.js

class Book {
  constructor(user, title, stand, pris, årstal, isbnnr, sprog, format, forfatter, image) {
    this.user = user;
    this.title = title;
    this.stand = stand;
    this.pris = pris;
    this.årstal = årstal;
    this.isbnnr = isbnnr;
    this.sprog = sprog;
    this.format = format;
    this.forfatter = forfatter;
    this.image = image;
  }


  // Laver HTML-elementet for bogen
  lavBogKort() {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${this.image}" alt="${this.title}" class="book-cover">
      <h3>${this.title}</h3>
      <p><strong>Forfatter:</strong> ${this.forfatter}</p>
      <p><strong>Pris:</strong> ${this.pris} kr.</p>
      <p><strong>Stand:</strong> ${this.stand}</p>
      <p><strong>Sprog:</strong> ${this.sprog}</p>
      <p><strong>Udgivelsesår:</strong> ${this.årstal}</p>
      <p><strong>ISBN:</strong> ${this.isbnnr}</p>
      <p><strong>Format:</strong> ${this.format}</p>
      <p><strong>Bruger:</strong> ${this.user}</p>
    `;
    return card;
  }
}

class BookShop {
  constructor(bookArray) {
    // Lav rigtige Book-objekter ud fra data-arrayet
    this.books = bookArray.map(
      b =>
        new Book(
          b.user,
          b.title,
          b.stand,
          b.pris,
          b.årstal,
          b.isbnnr,
          b.sprog,
          b.format,
          b.forfatter,
          b.image
        )
    );
    this.listContainer = document.getElementById("book-list");
  }
  visAlleBøger() {
    this.listContainer.innerHTML = "";
    if (this.books.length === 0) {
      this.listContainer.innerHTML = "<p>Ingen bøger fundet.</p>";
      return;
    }

    this.books.forEach(book => {
      const card = book.lavBogKort();
      this.listContainer.appendChild(card);
    });
  }

  init() {
    this.visAlleBøger();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shop = new BookShop(books); // 'books' kommer fra eksisterendeBøger.js
  shop.init();
});