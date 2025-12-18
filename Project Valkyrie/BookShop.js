// ==================== 1. BOOK CLASS ==================== //
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

// ==================== 2. BOOKSHOP CLASS ==================== //
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

  // Bruges af Sortering.js til at vise resultat af søgning
  visFiltreredeBøger(filtreretListe) {
    this.listContainer.innerHTML = "";
    if (filtreretListe.length === 0) {
      this.listContainer.innerHTML = "<p>Ingen bøger matcher din søgning.</p>";
      return;
    }
    filtreretListe.forEach(book => {
      this.listContainer.appendChild(book.lavBogKort());
    });
  }

  init() {
    this.visAlleBøger();
  }
}

// Global variabel så den kan bruges i sortering.js //
let shop;

document.addEventListener("DOMContentLoaded", () => {
  // 'books' kommer fra eksisterendeBøger.js filen //
  shop = new BookShop(books);
  shop.init();

  initModalLogic();
});


//funktion til at oprette ny annonce //
function initModalLogic() {
  let modal = document.getElementById("book-modal");
  let openBtn = document.getElementById("add-book-btn");
  let closeBtn = document.querySelector(".close-modal");
  let form = document.getElementById("new-book-form");

  // 1. åben modul //
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // lukker pop-uppen ved klik på krydset //
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // lukker pop-uppen hvis man klikker udenfor vinduet //
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let title = document.getElementById("new-title").value;
    let author = document.getElementById("new-author").value;
    let sprog = document.getElementById("new-sprog").value;
    let stand = document.getElementById("new-stand").value;
    let price = Number(document.getElementById("new-price").value);
    let year = Number(document.getElementById("new-year").value);
    let imageInput = document.getElementById("new-image").value;
    let user = document.getElementById("new-user").value;


    let image = imageInput ? imageInput : "https://via.placeholder.com/150";
    let isbn = "N/A";
    let format = "Paperback";
    let myNewBook = new Book(
      user,
      title,
      stand,
      price,
      year,
      isbn,
      sprog,
      format,
      author,
      image
    );

    shop.books.push(myNewBook);

    if (typeof OpdaterBogLister === "function") {
      OpdaterBogLister();
    } else {
      shop.visAlleBøger();
    }
//lukker vinduet og resetter formen //
    form.reset();
    modal.style.display = "none";

    //afslutter ved at give brugeren en bekræftelse //
    alert(`"${title}" er nu sat til salg!`);
  });
}