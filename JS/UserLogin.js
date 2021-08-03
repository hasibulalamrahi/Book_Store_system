

//In this segment we will be  doing the Hidein and Unhide the Create account ,Admin Login upon pressing them
// document.addEventListener( () => {
//     var HideAdminEdit = document.querySelector("#admin_Edit");
    
//     // const createAccountForm = document.querySelector("#createAccount");
//     // const adminLogin = document.querySelector("#adminLogin");
//     // const notlinkAdminLogIN = document.querySelector("#notlinkAdminLogIN");

//     document.querySelector("#form_button1").addEventListener("submit", e => {
//         e.preventDefault();
//         HideAdminEdit.classList.add("form1--hidden");
//         // createAccountForm.classList.remove("form--hidden");
//     });

    // document.querySelector("#linkLogin").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.remove("form--hidden");
    //     createAccountForm.classList.add("form--hidden");
    // });
    // document.querySelector("#linkAdminLogIN").addEventListener("click", e => {
    //     e.preventDefault();
    //     loginForm.classList.add("form--hidden");
    //     adminLogin.classList.remove("form--hidden");
    // });
    // document.querySelector("#notlinkAdminLogIN").addEventListener("click", e => {
    //     e.preventDefault();
    //     adminLogin.classList.add("form--hidden");
    //     loginForm.classList.remove("form--hidden");
    // });

    class UI {
        static displayBooks() {
          if (localStorage.getItem('AuthenticationState') === null) {
            alert("Seesion Expired, Login Again to continue");
            window.open("Admin_Login.html", "_self");
         }
          const books = getBooks();
          console.log(books);
          books.forEach((book) => UI.addBookToList(book));
        }
      
        static addBookToList(book) {
          const list = document.querySelector('#book-list');
          let url = `https://books.google.com.bd/books?vid=ISBN`;
          let name = book.isbn;
          url+=name;
          let chk = '<a href ="'+ url+'">'+name+'</a>'
          // let imgTag = '<img src =" '+imgUrl'" alt  '
          const row = document.createElement('tr');
          
      
          row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${chk}</td>
            <td>${book.img}</td>
          `;
      
          list.appendChild(row);
        }    
    }

    function getBooks() {
        let books;
        // if(localStorage.getItem('books') === null) {
        //   books = [];
        // } else {
          books = JSON.parse(localStorage.getItem('books'));
        // }
        // console.log(books);
  
        return books;
      }

      document.addEventListener('DOMContentLoaded',UI.displayBooks);




      function pageRedirectLogOut(){
        console.log('a');
        window.location.replace("Login.html");
    }
    
    function intoAdminEdit(){
        window.location.replace("admin_homepage.html");
    
    }