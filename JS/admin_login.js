document.querySelector ('#adminLogin').addEventListener('submit',(e) =>{
    e.preventDefault();
    const AdminId = document.querySelector('#adminId').value;
    const AdminUserName = document.querySelector('#adminUserName').value;
    var  passval = document.querySelector('#Pass').value;

    if((AdminId == "1234") && (AdminUserName == "Hasib") && (passval == "12") ){
        console.log("Y");
      document.getElementById("adminLogin").reset();
      localStorage.setItem("AuthenticationState", "Authenticated");
                
      //This authentication key will expire in 1 hour.
      // sessionStorage.setItem("AuthenticationExpires", Date.now.addHours(1));
      window.location.replace("Login_sucess.html");


    }

    else {
        alert("Wrong User ID or Password Combination");
    }
    

    
});
