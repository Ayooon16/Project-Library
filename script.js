class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  refreshList() {
    const table = document.getElementById('bookList');
    table.innerHTML = '';

    this.books.forEach(book => {
      const row = document.createElement('tr');
      Object.entries(book).forEach(([key, value]) => {
        const td = document.createElement('td');
        if (key === 'isRead') {
          td.textContent = value ? 'Read' : 'Not read';
        } else {
          td.textContent = value;
        }
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  }

  addBook(title, author, pages, isRead) {
    this.books.push(new Book(title, author, pages, isRead));
    this.refreshList();
  }
}

const myLibrary = new Library();

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  myLibrary.addBook(title, author, pages, isRead);
}