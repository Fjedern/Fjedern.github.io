"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
var form = document.createElement("form");

//Function that calls all other functions in order
//--Don't modify--
function init() {
    initLoginForm();
    initLabel();
    initInput();
    initButton();
}

function initLoginForm() {
    //Add code here to:
    //create and add form element to the Dom.
    document.getElementsByTagName('body')[0].appendChild(form);
}

function initLabel() {
    //Add code here to:
    //create label element and set the lable to "username" (TIP: use .textContent).
    //Add it to the form element. (TIP: use .appendChild).
    var l = document.createElement("Label");
    l.innerHTML = "Username";
    form.appendChild(l);
}

function initInput() {
    //Add code here to:
    //create input element and set it to be requried (TIP: use .required = true).
    //Add it to the form element. (TIP: use .appendChild).
    var i = document.createElement("input"); //input element, text
    i.setAttribute('type', "text");
    i.setAttribute('name', "username");
    i.setAttribute("id", "input");
    i.required = true;
    form.appendChild(i);
}

function initButton() {
    //create button element and set the text to "login" (TIP: use .textContent)
    ////Add it to the form element. (TIP: use .appendChild).

    //Add click eventListener for button and call validateLoginInfo function inside it.
    //if validateLoginInfo is true alert user with "Welcome" text.
    //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
    var b = document.createElement("input"); //input element, Submit button
    b.setAttribute('type', "submit");
    b.setAttribute('value', "Login");
    b.setAttribute("id", "button");
    form.appendChild(b);

    document.getElementById("button").addEventListener("click", function () {
        if(validateLoginInfo()){
            alert("Welcome!");
        }else {
            document.getElementById("input").style.border = "3px solid red";
        }
    });
}

function validateLoginInfo(bool) {
    //Get the input using form input element (TIP: use .value)
    //if the username is in the usernames array return true if not return false.
    var inputE = document.getElementById("input");
    if (usernames.includes(inputE.value)) {
        return true;
    } else {
        return false;
    }
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
window.addEventListener('DOMContentLoaded', () => {
    init();
    document.getElementById("input").addEventListener("change", function () {
        document.getElementById("input").style.border = "1px solid black";
    });
});