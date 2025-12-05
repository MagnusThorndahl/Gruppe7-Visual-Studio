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
 <img src="${book.image || 'https://via.placeholder.com/150x220?text=Ingen+forside'}" 
           alt="${book.title}" 
           class="book-cover">

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
class Book {
constructor (user, title, stand, pris, årstal, isbnnr, sprog, format, forfatter, image) {
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
// eksempel metode til at vise boginfo //
visBogInformation() {
  console.log(
    '"$(this.title)" af $(this.forfatter), udgivet i $(this.årstal), med en pris på: $(this.pris) kr.'
  );
}
}