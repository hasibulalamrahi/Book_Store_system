

//In this segment we will be  doing the Hidein and Unhide the Create account ,Admin Login upon pressing them

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
        static showBooks() {
          
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

      if (localStorage.getItem('HideState') === "Hide") {
        // alert("Seesion Expired, Login Again to continue");
            document.addEventListener('DOMContentLoaded', () => {
            var HideAdminEdit = document.querySelector("#admin_Edit");
        
            // document.querySelector("#form_button1").addEventListener("submit", e => {
                // e.preventDefault();
                HideAdminEdit.classList.add("form1--hidden");
                // createAccountForm.classList.remove("form--hidden");
            });

        // window.open("Admin_Login.html", "_self");
     }
      // document.addEventListener('DOMContentLoaded',UI.showBooks);
      if (localStorage.getItem('adminAllow') === " " && localStorage.getItem('userAllow') === "") {
        alert("Session Expired, Login again to Continue");
        window.location.replace("Admin_Login.html", "_self");
     }
     else{
      UI.showBooks();

     }
     
      // UI.showBooks();
    
   



    function pageRedirectLogOut(){
        // console.log('a');
        // sessionStorage.setItem("AuthenticationState","");
        localStorage.setItem("userAllow","");
        localStorage.setItem("adminAllow"," ");
        localStorage.setItem("HideState", "");
        window.location.replace("User_Login_page.html");
    }
      
    function intoAdminEdit(){
          localStorage.setItem("adminAllow","allow");
          window.location.replace("admin_edit.html");
      
    }

    // document.addEventListener('DOMContentLoaded', () => {
    //   var HideAdminEdit = document.querySelector("#admin_Edit");
  
    //   // document.querySelector("#form_button1").addEventListener("submit", e => {
    //       // e.preventDefault();
    //       HideAdminEdit.classList.add("form1--hidden");
    //       // createAccountForm.classList.remove("form--hidden");
    //   });
  