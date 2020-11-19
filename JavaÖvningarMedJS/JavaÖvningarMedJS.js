

function pageLoad(){

    //Uppgift 1
    var number = document.getElementById("numberOne").innerHTML;
    document.getElementById("answerOne").innerHTML = Math.pow(number,2);

    //Uppgift 2
    var föreSum = 500;
    document.getElementById("answerTwo").innerHTML = 0.09 * föreSum + 8000;
}

console.log("test");