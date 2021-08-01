let form1 = document.querySelector('#login');
form1.addEventListener('submit', processInput);

function processInput(e){
    e.preventDefault();

    let username = form1.querySelector('#username').value;
    let password = form1.querySelector('#Password1').value;
    console.log(username);

    let id = checkLogin(username, password);
    console.log(id);
    if(id == -1){
        wrongCreds();
    }
    else{
        loginUser(id);
    }
}

function checkLogin(username, password){
    let data = localStorage.getItem('register');
    let register= JSON.parse(data);
    console.log(register);
    console.log(register.length);
     for(var user = 0 ; user<(register.length );user++){
        console.log(register[user].Password);
       if(register[user].username == username && register[user].Password == password){
            return register[user].id;
        }
    }
    
    return -1;
}

function loginUser(id){
    let data = localStorage.getItem('register');
    let register = JSON.parse(data);

    user = register[id];

   

    setTimeout(() => {
        window.location.replace('./Login_sucess.html');
    }, 1000);
    
}

function wrongCreds(){
    alert("Wrong Credentials");
    
}


document.querySelector ('#adminLogin').addEventListener('submit',(e) =>{
    e.preventDefault();
    const AdminId = document.querySelector('#adminId').value;
    const AdminUserName = document.querySelector('#adminUserName').value;
    var  passval = document.querySelector('#Pass').value;

    if((AdminId == "1234") && (AdminUserName == "Hasib") && (passval == "12") ){
        console.log("Y");
      document.getElementById("adminLogin").reset();
      window.location.replace("admin_login.html");


    }

    else {
        alert("Wrong User ID or Password Combination");
    }
    

    
});
