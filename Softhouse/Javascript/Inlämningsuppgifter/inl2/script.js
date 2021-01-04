"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];

initForm();

function initForm() {
    var f = document.createElement("form");
    
    var l = document.createElement("Label");
    l.innerHTML = "Username";
    f.appendChild(l);
    
    var i = document.createElement("input"); //input element, text
    i.setAttribute('type', "text");
    i.setAttribute('name', "username");
    i.setAttribute("id", "input");
    i.required = true;
    f.appendChild(i);
    
    var b = document.createElement("input"); //input element, Submit button
    b.setAttribute('type', "submit");
    b.setAttribute('value', "Login");
    b.setAttribute("id", "button");
    f.appendChild(b);
    
    document.getElementsByTagName('body')[0].appendChild(f);
}


document.getElementById("button").addEventListener("click", function() {
    var inputE = document.getElementById("input");
    if(inputE.value == "") {
        inputE.style.border = "3px solid red";
    }else {
        inputE.style.border = "1px solid black";
    }
    if (inputE.value == "yazeen" || inputE.value == "ec" || inputE.value == "softhouse"){
        alert("Welcome!");
    }
});

document.getElementById("input").addEventListener("change", function(){
    
    document.getElementById("input").style.border = "1px solid black";
});

// usernames.includes


// var p = document.createElement("p");
// f.setAttribute("value", inputValue)7