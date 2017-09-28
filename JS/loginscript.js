var my_email ="sereen93@vt.edu";
var my_password = "12345";

var enter_button = document.getElementById("enter_button");
enter_button.onclick = function () {

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

    alert ("Thank you" + " ");
    if (email == my_email){
        console.log ("is true");
        return true;
        
    } else {
        console.log ("is false");
        alert ("login incorrect");
        return false;
        
    }
        
    
    
    
    //document.getElementById("email").value = "my_name@gmail.com";//
    //return false;
};

function sum (num_1, num_2){
   var result = num_1 + num_2; 
    return result;
    
}

//var thesumresult = sum (12345,6789);
//alert (thesumresult);

function add (my_name, my_lastname){
    var result= my_name + " " + my_lastname;
        return result;
}
//var theaddresult = add (my_name, + " " + my_lastname);

