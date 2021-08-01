//In this segment we will be  doing the Hidein and Unhide the Create account ,Admin Login upon pressing them
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const adminLogin = document.querySelector("#adminLogin");
    const notlinkAdminLogIN = document.querySelector("#notlinkAdminLogIN");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    document.querySelector("#linkAdminLogIN").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        adminLogin.classList.remove("form--hidden");
    });
    document.querySelector("#notlinkAdminLogIN").addEventListener("click", e => {
        e.preventDefault();
        adminLogin.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

// End of the Hide Section 
   
    // This section checks whether the Username section has a length of 10 characters or not if not then sends error message (Username validation section)
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        
        // Perform your AJAX/Fetch login

         setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {   //checks whether the username is valid or not
                setInputError(inputElement, "Username must be at least 10 characters in length");   //Error message 
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});