document.querySelector ('#adminLogin').addEventListener('submit',(e) =>{
    e.preventDefault();
    const AdminId = document.querySelector('#adminId').value;
    const AdminUserName = document.querySelector('#adminUserName').value;
    var  passval = document.querySelector('#Pass').value;

    if((AdminId == "1234") && (AdminUserName == "Hasib") && (passval == "12") ){
        console.log("Y");
      document.getElementById("adminLogin").reset();
       localStorage.setItem("userAllow", "allow");
      //  localStorage.setItem("Allow","allow");         
      //This authentication key will expire in 1 hour.
    // localStorage.setItem("AuthenticationExpires", Date.now.addHours(1));
       window.location.replace("Landing_page.html");


    }

    else {
        alert("Wrong User ID or Password Combination");
    }
    

    
});
