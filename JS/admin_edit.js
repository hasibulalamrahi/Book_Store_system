// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn,img) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.img = img;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
    //   if (localStorage.getItem('tokenallow') === null) {
    //     alert("session expired");
    //     window.open("Admin_Login.html", "_self");
    //  }
      const books = Store.getBooks();
      // console.log(books);
      books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
      // console.log(book);
      let list = document.querySelector('#book-list');
      let url = `https://books.google.com.bd/books?vid=ISBN`;
      let name = book.isbn;
      url+=name;
      let chk = '<a href ="'+ url+'">'+name+'</a>'
      // let imgTag = '<img src =" '+imgUrl'" alt  '
      let row = document.createElement('tr');
      
  
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${chk}</td>
        <td>${book.img}</td>
        <td><a href="#" class="btn btn-dark dark">EDIT</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
      
    }
     static editBook(el){
      if(el.classList.contains('dark')) {
      var isbnEdit =el.parentElement.previousElementSibling.previousElementSibling.textContent;
      // console.log(isbnEdit);
      Store.startEdit(isbnEdit);
      }
     }   
     static showEditedBooks(BookDetails) {
      //  console.log(BookDetails);
        //  let a  = document.querySelector('#book-form');

        
        document.querySelector('#title').value = BookDetails.title ;
        document.querySelector('#author').value =BookDetails.author ;
        document.querySelector('#isbn').value = BookDetails.isbn ;
        
            
            
        };

        
     
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
  
      // Vanish in 1 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 1000);
    }
  
    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
      document.querySelector('#img').value = '';

    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      // console.log(books);

      return books;
    }
  
    static addBook(book) {
      // console.log(book);
      const books = Store.getBooks();
      console.log(books);
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
      // alert("Do You Want to remove this Book");
      books.forEach((book, index) => {
        // console.log(index);
        if(book.isbn === isbn) {
          console.log(index);

          books.splice(index, 1);
          UI.showAlert('Book Removed', 'success');

        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }

    static startEdit(isbnEdit){
        // console.log(isbnEdit);
        const storedBooks = JSON.parse(localStorage.getItem('books'));
        // console.log(storedBooks.length);
        for(var i = 0 ; i<(storedBooks.length );i++){
         if(storedBooks[i].isbn == isbnEdit){
            // console.log(storedBooks[i]);
            UI.showEditedBooks(storedBooks[i]);
            
          }
      }

        // UI.showAlert('Book Edited','success');

    }
  }
  
//Holding back redirecting unauthorizely  


//   Date.prototype.addHours = function(h) {    
//     this.setTime(this.getTime() + (h*60*60*1000)); 
//     return this;   
//  }
  if (localStorage.getItem('userAllow') === "" || localStorage.getItem('adminAllow')=== "") {
    alert("Session Expired, Login again to Continue");
    window.location.replace("Admin_Login.html", "_self");
 }
//  else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
//   window.open("AccessDenied.html", "_self");
//  }


 // Event: Display Books 
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  // Event: Add a Book
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    const img =document.querySelector('#img').value;

  
    // Validate
    if(title === '' || author === '' || isbn === ''|| img ==='' ) {
      UI.showAlert('Please fill in all fields','danger');
    } else {
      // Instatiate book
      const book = new Book(title, author, isbn,img);
  
      // Add Book to UI
      UI.addBookToList(book);
  
      // Add book to store
      Store.addBook(book);
  
      // Show success message
      UI.showAlert('Book Added','success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    // console.log(e.target);
    UI.deleteBook(e.target);
  
    // Remove book from store

    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    // Show success message
    // UI.showAlert('Book Removed', 'success');
    UI.editBook(e.target);
    // console.log(e.target);
  });
  

  function pageRedirectLogOut(){
    localStorage.setItem("userAllow","");
    localStorage.setItem("adminAllow","");

    window.location.replace("Admin_Login.html");
}
  function backToUserLogin(){
    window.location.replace("Landing_page.html");
  }