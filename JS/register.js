const form = document.querySelector('#createAccount');
form.addEventListener('submit', processInput);

function processInput(e){
    e.preventDefault();

    let username = form.querySelector('#signupUsername').value;
    let emailAdress = form.querySelector('#EmailAdress').value;
    let Password = form.querySelector('#Password').value;
    let confirmPass =form.querySelector('#confirmPassword').value;
    let emailLen = emailAdress.length;
    // console.log(username);
    // if(username == ''||emailAdress == ''||Password==''){
    //     alert("Please clear all the fields")
    // }
    // else if(emailLen<=5 || Password !=confirmPass){
    //     alert("Incorrect email or Password Combination");
    // }
    // else{
    //     var user = new newUser(username, emailAdress, Password);
    //     alert("Thank you for registering , Please sign In again to continue");
    // }
    var counter = existsUser(username,emailAdress) 
    if(counter==-1){
        alert("Account Already Exisits");
    }
    else{
        if(username == ''||emailAdress == ''||Password==''){
            alert("Please clear all the fields")
        }
        else if(emailLen<=5 || Password !=confirmPass){
            alert("Incorrect email or Password Combination");
        }
        else{
            var user = new newUser(username, emailAdress, Password);
            alert("Thank you for registering , Please sign In again to continue");
        }
    }






    
    //console.log(user);
    addUser(user);
}

function addUser(user){
    //console.log(user);
    let data = localStorage.getItem('register');
    let register = JSON.parse(data);
    console.log(register);

    if(!register){
        register = [];
    }

    user.id = register.length;
    //console.log(register);
    register.push(user);
    localStorage.setItem('register', JSON.stringify(register));
   
}

function newUser(username, emailAdress,Password){
    this.username = username;
    this.emailAdress = emailAdress;
    this.Password = Password;
}

function existsUser(username,emailAdress){
    console.log(username);
    console.log(emailAdress);
    let data = localStorage.getItem('register');
    let register= JSON.parse(data);
    // console.log(register);
    // console.log(register.length);
     for(var user = 0 ; user<(register.length );user++){
        // console.log(register[user].Password);
       if(register[user].username == username && register[user].emailAdress == emailAdress){
            return -1;
        }
      
}
}

