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


//opret ny annonce //
function initModalLogic() {
  // Hent elementer fra DOM
  let modal = document.getElementById("book-modal");
  let openBtn = document.getElementById("add-book-btn");
  let closeBtn = document.querySelector(".close-modal");
  let form = document.getElementById("new-book-form");

  // 1. ÅBN MODAL (Klik på knappen)
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // 2. LUK MODAL (Klik på X)
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 3. LUK MODAL (Klik udenfor selve boksen)
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // 4. HÅNDTER FORMULAR (når brugeren opretter ny bog)
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stopper siden fra at opdatere

    // Hent værdier fra inputfelterne
    let title = document.getElementById("new-title").value;
    let author = document.getElementById("new-author").value;
    let sprog = document.getElementById("new-sprog").value;
    let stand = document.getElementById("new-stand").value;
    let price = Number(document.getElementById("new-price").value);
    let year = Number(document.getElementById("new-year").value);
    let imageInput = document.getElementById("new-image").value;
    let user = document.getElementById("new-user").value;

    // Brug placeholder-billede hvis der ikke er uploadet et
    let image = imageInput ? imageInput : "https://via.placeholder.com/150";

    // Hardkodede standardfelter
    let isbn = "N/A";
    let format = "Paperback";

    // Opret et nyt bog-objekt (her bruges Book-klassen)
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

    // Tilføj bogen til listen af bøger
    shop.books.push(myNewBook);

    // Opdater visningen
    if (typeof OpdaterBogLister === "function") {
      OpdaterBogLister();
    } else {
      shop.visAlleBøger();
    }

    // Ryd formularen og luk modal-vinduet
    form.reset();
    modal.style.display = "none";

    // Giv brugeren en bekræftelse
    alert(`"${title}" er nu sat til salg!`);
  });
}