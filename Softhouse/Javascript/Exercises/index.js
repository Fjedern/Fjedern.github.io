function calculate() {
    var height = prompt("Skriv in ett värde!");
    document.getElementById("svar").innerHTML = height;

    if (height > 100) {
        document.getElementById("svar").innerHTML = "higher than 100";
    } else if (height < 180) {
        document.getElementById("svar").innerHTML = "lower than 180";
    } else if (height == 190) {
        document.getElementById("svar").innerHTML = "exactly 190";
    } else if (height === 190) {
        document.getElementById("svar").innerHTML = "exactly 190 and same type";
    }
}

function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    alert(longestWord)
    return longestWord.length;
  }
  document.getElementById("svar").innerHTML = findLongestWord("The quick brown fox jumped over the lazy dog");