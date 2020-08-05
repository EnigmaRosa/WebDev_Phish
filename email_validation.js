function emailValidation() {
    
    var email = document.getElementById("username");
    var strudel = email.indexOf("@");
    var dot = email.indexOf(".");
    submitOK = "true";

    if (strudel < 2) {
        alert("You must input a valid email address.")
        submitOK = "false";
    }

    if (dot < 4) {
        alert("You must input a valid email address.");
        submitOK = "false";
    }

    return submitOK;

}