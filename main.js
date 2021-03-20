let arr = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", maxPages: 200, onPage: 60 },
  { title: "Harry Potter", author: "J.K. Rowling", maxPages: 250, onPage: 150 },
  {
    title: "50 Shades of Grey",
    author: "E.L. James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

let myUl1 = document.querySelector(".ul1");
let myUl2 = document.querySelector(".ul2");

function Books(title, author, onPage, maxPages) {
  this.title = title;
  this.author = author;
  this.onPage = onPage;
  this.maxPages = maxPages;

  this.liEl = function () {
    myUl1.innerHTML += `<li>${this.title} by ${this.author}</li>`;
  };

  if (this.onPage === this.maxPages) {
    myUl2.innerHTML += `<li style="color:green">You already have read ${this.title} by ${this.author}</li>`;
  } else {
    myUl2.innerHTML += `<li style="color:red"> You still need to read ${this.title} by ${this.author}</li>`;
  }
}

arr.forEach((book) => {
  const instance = new Books(
    book.title,
    book.author,
    book.maxPages,
    book.onPage
  );
  instance.liEl();
});

let myTable = document.querySelector(".table");
let tableRow = myTable.insertRow(0);
myTable.appendChild(tableRow);

let myTh1 = document.createElement("th");
myTh1.innerText = "Title";
tableRow.appendChild(myTh1);

let myTh2 = document.createElement("th");
myTh2.innerText = "Author";
tableRow.appendChild(myTh2);

let myTh3 = document.createElement("th");
myTh3.innerText = "Max Pages";
tableRow.appendChild(myTh3);

let myTh4 = document.createElement("th");
myTh4.innerText = "On Page";
tableRow.appendChild(myTh4);

let myTh5 = document.createElement("th");
myTh5.innerText = "Progress";
tableRow.appendChild(myTh5);

arr.forEach((book) => {
  let tableRow = myTable.insertRow(-1);

  let myTh1 = document.createElement("td");
  myTh1.innerText = book.title;
  tableRow.appendChild(myTh1);

  let myTh2 = document.createElement("td");
  myTh2.innerText = book.author;
  tableRow.appendChild(myTh2);

  let myTh3 = document.createElement("td");
  myTh3.innerText = book.maxPages;
  tableRow.appendChild(myTh3);

  let myTh4 = document.createElement("td");
  myTh4.innerText = book.onPage;
  tableRow.appendChild(myTh4);

  let myTd5 = document.createElement("td");
  let progressBar = document.createElement("div");
  let progressText = document.createElement("p");
  let progressBarBackground = document.createElement("div");
  let progress = Math.floor((book.onPage / book.maxPages) * 100);

  progressBarBackground.style.backgroundColor = "grey";
  progressBarBackground.style.width = "100%";
  progressBarBackground.style.height = "30px";
  progressBar.style.width = `${progress}%`;
  progressBar.style.height = "30px";
  progressBar.style.textAlign = "center";
  progressBarBackground.style.verticalAlign = "center";
  progressBar.style.backgroundColor = "green";
  progressText.style.color = "white";
  progressText.style.margin = "0";

  progressText.innerHTML = progress + "%";

  progressBar.appendChild(progressText);
  progressBarBackground.appendChild(progressBar);
  myTd5.appendChild(progressBarBackground);
  tableRow.appendChild(myTd5);
});
