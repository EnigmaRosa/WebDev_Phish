function enableButton(){

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (email != "" && password != "")
    {
        document.getElementById("button").removeAttribute("disabled");
    }

    else {document.getElementById("button").setAttribute("disabled", "true");}
}

function usernameTurnBlue(){

    document.getElementById("usernameContainer").style.borderBottomColor = "rgb(29, 161, 242)";
    document.getElementById("usernameLabel").style.color = "rgb(29, 161, 242)";
           
}

function passwordTurnBlue(){
    document.getElementById("passwordContainer").style.borderBottomColor = "rgb(29, 161, 242)";
    document.getElementById("passwordLabel").style.color = "rgb(29, 161, 242)";
}

function enterToSubmit(event){
    
    if(event.keyCode == 13){
        event.preventDefault();
        twitterFormValidation();
    }
}


function twitterFormValidation(){

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var strudel = email.indexOf("@");
    var dot = email.indexOf(".");
    submitEmailOK = true;
    var emailOK = "";
    passwordLengthOK = true;
    var passwordLength = "";
    passwordUpperOK = true;
    var uppercase = new RegExp("[A-Z]");
    var passwordUpper = "";
    passwordLowerOK = true;
    var lowercase = new RegExp("[a-z]");
    var passwordLower = "";
    submitPasswordOK = true;
    submitOK = false;

    // testing email validity

    if (strudel < 2 || dot < 4) {
        submitEmailOK = false;
        emailOK = "Email is not valid. "
    }

    // testing password validity

    if (password.length < 8) {
        passwordLength = "Password must be at least 8 characters. ";
        passwordLengthOK = false;
    }

    if (uppercase.test(password) == false){
        passwordUpper = "Password must contain an uppercase letter. ";
        passwordUpperOK = false;
    }

    if (lowercase.test(password) == false){
        passwordLower = "Password must contain a lowercase letter. ";
        passwordLowerOK = false;
    }

    // alert if password not valid
    if (!(passwordLengthOK == true && passwordUpperOK == true && passwordLowerOK == true)){
        submitPasswordOK = false;
    }

    if (submitEmailOK == false || submitPasswordOK == false) {
        alert(emailOK + passwordLength + passwordUpper + passwordLower + "Please try again.");
    }

    // check if both valid
    if (submitEmailOK == true && submitPasswordOK == true) {
        submitOK = true;
    }

    // if valid, submit
    if (submitOK == true){
        document.getElementById("form").submit();
    }

    if (submitOK == false){

        document.getElementById("form").reset();
        
        document.getElementById("usernameContainer").style.borderBottomColor = "rgb(101, 119, 134)";
        document.getElementById("usernameLabel").style.color = "rgb(101, 119, 134)";
        document.getElementById("passwordContainer").style.borderBottomColor = "rgb(101, 119, 134)";
        document.getElementById("passwordLabel").style.color = "rgb(101, 119, 134)";
        
        document.getElementById("button").setAttribute("disabled", "true");
    }

}