var elem;

function getAllElements() {
    elem = document.getElementsByTagName("*");
}

function returnAttribute(at) {
    var res = [];
    for (var i = 0; i < elem.length; i++) {
        if (elem[i].getAttribute(at)) {
            res.push(elem[i].getAttribute(at));
        }
    }
    return res;
}

function getResult() {
    getAllElements();
    var ids = returnAttribute("id");
    document.write("<b>" + ids + "</b>");
}

function pushbutton() {
    alert("Hello!");
}



// function pushbutton() {  
//     window.open("http://www.google.com","_blank","height=500,width=500,left=400,top=50,menubar=yes,resizable=yes");
// }

function factorial(x) {
    // om input argument är invalid , kasta en undantag!  
    if (x < 0) throw new Error("x must not be negative");
    // Annars , beräkna värde och returnera det
    var f=1;
    for(; x > 1; f *= x, x--) /* empty */ ;  return f;
    document.write(f);
}
function inmatningFakultet() {
    try {
        // Begära att användare mata in ett heltal
        var n = Number(prompt("Please enter a positive integer", ""));
        // Beräkna fakultet om inmatning är valid  
        var f = factorial(n);
        // Visa resultat  
        alert(n + "! = " + f);
    } 
    catch (ex) { // om inmatning är inte valid då denna del exekveras  alert(ex); // säger vad felet är
        alext(ex);
    }
}

function pushbutton2() {  
    window.open("http://www.google.com","_blank","height=500,width=500,left=400,top=50,menubar=yes,resizable=yes");
}