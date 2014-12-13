var errors = "";
var my_red = "#F5A9A9";



function validate_fname() {
    "use strict";
    var fname = document.getElementById("newFirstName");
    if (fname.value === "") {
        errors += "\n First Name can not be left blank.";
        fname.style.background = my_red;
        return false;
    } else {
        fname.style.background = '#ffffff';
        return true;
    }
}

function validate_lname() {
    "use strict";
    var lname = document.getElementById("newLastName");
    if (lname.value === "") {
        errors += "\n First Name can not be left blank.";
        lname.style.background = my_red;
        return false;
    } else {
        lname.style.background = '#ffffff';
        return true;
    }
}

function validate_uname() {
    "use strict";
    var uname = document.getElementById("newUsername");
    if (uname.value === "") {
        errors += "\n Username can not be left blank.";
        uname.style.background = my_red;
        return false;
    } else {
        uname.style.background = '#ffffff';
        return true;
    }
}

/*
function validate_password() {
    "use strict";
    var password = document.forms["newUser"]["password"];
    var cpassword = document.forms["newUser"]["cpassword"];
    if (password.value === "" || cpassword.value === "") {
        errors += "\n Password can not be left blank.";
        password.style.background = my_red;
        cpassword.style.background = my_red;
        return false;
    } else {
        if (password.value !== cpassword.value) {
            errors += "\n Passwords must match.";
            password.style.background = my_red;
            cpassword.style.background = my_red;
            return false;
        } else {
            fname.style.background = '#ffffff';
            return true;
        }
    }
}
*/

function formvalid(){
    
    var fname  = validate_fname();
    var lname = validate_lname();
 //   var pass = validate_password();
    var user = validate_uname();
    
    if (fname && lname && user) {

        return true;
    } else {
        window.alert(errors);
        errors = "";
        return false;
    }
    
}

