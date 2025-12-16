// ==================== 1. BOOK CLASS ====================
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

// ==================== 2. BOOKSHOP CLASS ====================
class BookShop {
  constructor(bookArray) {
    // Mapper rå data om til Book-objekter
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

// Global variabel så andre scripts (Sortering.js) kan tilgå den
let shop;

document.addEventListener("DOMContentLoaded", () => {
  // 'books' kommer fra eksisterendeBøger.js
  shop = new BookShop(books);
  shop.init();

  // Initialiser Modal Funktionalitet
  initModalLogic();
});


// ==================== 3. MODAL & ADD BOOK LOGIC ====================
function initModalLogic() {
  const modal = document.getElementById("book-modal");
  const openBtn = document.getElementById("add-book-btn");
  const closeSpan = document.querySelector(".close-modal");
  const form = document.getElementById("new-book-form");

  // Sikkerhedscheck hvis elementerne ikke findes
  if (!modal || !openBtn || !form) return;

  // 1. ÅBN MODAL
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // 2. LUK MODAL (Klik på X)
  closeSpan.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 3. LUK MODAL (Klik udenfor boksen)
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // 4. HÅNDTER OPRETTELSE AF BOG
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Forhindrer side-refresh

    // Hent værdier fra inputs
    const title = document.getElementById("new-title").value;
    const author = document.getElementById("new-author").value;
    const sprog = document.getElementById("new-sprog").value;
    const stand = document.getElementById("new-stand").value;
    
    // VIGTIGT: Konverter tal-strenge til Numbers, så sortering virker
    const price = Number(document.getElementById("new-price").value);
    const year = Number(document.getElementById("new-year").value);
    
    const imageInput = document.getElementById("new-image").value;
    // Brug placeholder hvis billede-feltet er tomt
    const image = imageInput ? imageInput : "https://via.placeholder.com/150"; 
    
    const user = document.getElementById("new-user").value;

    // Hardcoded defaults for felter vi ikke beder om (for simplicitet)
    const isbn = "N/A";
    const format = "Paperback";

    // Opret ny instans af Book
    const myNewBook = new Book(
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

    // Tilføj til listen i memory
    shop.books.push(myNewBook);

    // Opdater visningen
    // Hvis 'OpdaterBogLister' findes (fra Sortering.js), brug den for at beholde filtre
    if (typeof OpdaterBogLister === "function") {
      OpdaterBogLister(); 
    } else {
      shop.visAlleBøger();
    }

    // Reset formular og luk
    form.reset();
    modal.style.display = "none";
    alert(`"${title}" er nu sat til salg!`);
  });
}