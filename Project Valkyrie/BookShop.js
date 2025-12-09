

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

  visFiltreredeBøger(filtreretListe) {
    this.listContainer.innerHTML = "";
    filtreretListe.forEach(book => {
      this.listContainer.appendChild(book.lavBogKort());
    });
  }

  init() {
    this.visAlleBøger();
  }
}

let shop;

document.addEventListener("DOMContentLoaded", () => {
  shop = new BookShop(books);
  shop.init();
});