let arr = [
  { title: "The Hobbit", autor: "J.R.R. Tolkien", maxPages: 200, onPage: 60 },
  { title: "Harry Potter", autor: "J.K. Rowling", maxPages: 250, onPage: 150 },
  {
    title: "50 Shades of Grey",
    autor: "E.L. James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    autor: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  { title: "Hamlet", autor: "William Shakespeare", maxPages: 550, onPage: 550 },
];

let myUl1 = document.querySelector(".ul1");
let myUl2 = document.querySelector(".ul2");

function Books(title, autor, onPage, maxPages) {
  this.title = title;
  this.autor = autor;
  this.onPage = onPage;
  this.maxPages = maxPages;

  this.liEl = function () {
    myUl1.innerHTML += `<li>${this.title} by ${this.autor}</li>`;
  };

  if (this.onPage === this.maxPages) {
    myUl2.innerHTML += `<li style="color:green">You already have read ${this.title} by ${this.autor}</li>`;
  } else {
    myUl2.innerHTML += `<li style="color:red"> You still need to read ${this.title} by ${this.autor}</li>`;
  }
}

arr.forEach((book) => {
  const instance = new Books(
    book.title,
    book.autor,
    book.maxPages,
    book.onPage
  );
  instance.liEl();
});
