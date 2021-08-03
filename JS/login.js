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
        // console.log(register[user].Password);
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
        window.location.replace('./ActualuserLogin.html');
    }, 1000);
    
}

function wrongCreds(){
    alert("Wrong Credentials");
    
}

// Date.prototype.addHours = function(h) {    
//     this.setTime(this.getTime() + (h*60*60*1000)); 
//     return this;   
//  }

 
