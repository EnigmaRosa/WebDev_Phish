function facebookFormValidation(){

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var strudel = email.indexOf("@");
    var dot = email.indexOf(".");
    submitEmailOK = true;
    var emailOK = "";
    passwordMinOK = true;
    var passwordMin = "";
    passwordUpperOK = true;
    var uppercase = new RegExp("[A-Z]");
    var passwordUpper = "";
    passwordLowerOK = true;
    var lowercase = new RegExp("[a-z]");
    var passwordLower = "";
    passwordNumOK = true;
    var digit = new RegExp("[0-9]");
    var passwordNum = "";
    passwordSpecialOK = true;
    var specialChar = new RegExp("[!@#\\$%\\^\\*\\.\\?\\/\\\\\)\\(\\)]");
    var passwordSpecial = "";
    submitPasswordOK = true;
    submitOK = false;

    // testing email validity

    if (strudel < 2 || dot < 4) {
        submitEmailOK = false;
        emailOK = "Email is not valid. "
    }

    // testing password validity

    if (password.length < 6) {
        passwordMin = "Password must be at least 6 characters. ";
        passwordMinOK = false;
    }

    if (uppercase.test(password) == false){
        passwordUpper = "Password must contain an uppercase letter. ";
        passwordUpperOK = false;
    }

    if (lowercase.test(password) == false){
        passwordLower = "Password must contain a lowercase letter. ";
        passwordLowerOK = false;
    }

    if (digit.test(password) == false){
        passwordNum = "Password must contain a digit. ";
        passwordNumOK = false;
    }

    if (specialChar.test(password) == false){
        passwordSpecial = "Password must contain at least one special character. ";
        passwordSpecialOK = false;
    }

    // alert if password not valid
    if (!(passwordMinOK == true && passwordUpperOK == true && passwordLowerOK == true && passwordNumOK == true && passwordSpecialOK == true)) {
        submitPasswordOK = false;
    }

    if (submitEmailOK == false || submitPasswordOK == false) {
        alert(emailOK + passwordMin + passwordUpper + passwordLower + passwordNum + passwordSpecial + "Please try again.");
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
    }

}