const myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}
function refreshList() {
  table = document.getElementById('bookList')
  table.innerHTML = ''
  myLibrary.forEach(element => {
    console.log(element)
    var row = document.createElement('tr')
    Object.entries(element).map(obj => {
      td = document.createElement("td")
      if(obj[1] === true || obj[1] === false){
        td.textContent = (obj[1]) ? 'Read':'Not read'
      }
      else{td.textContent = obj[1]}
      
      row.appendChild(td)
    })
    table.appendChild(row)
  });
}
function addBookToLibrary() {
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  isRead = ((document.getElementById('isRead').checked) ? true : false)
  myLibrary.push(new Book(title, author, pages, isRead))
  refreshList()
}
