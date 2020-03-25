$(document).ready(function() {
  // function to evaluate textbox
  function checkWord(word) {
    var word = [];

    $("#submit").on("click", function(e) {
      e.preventefault();
        alert("button clicked")
    //   word = $(".palindrome")
    //     .val()
    //     .trim();
    //   for (i = 0; i < word.length / 2; i++) {
    //     if (word[i] !== word[word.length - i - 1]) {
    //       alert("This is not a plaindrome!");
    //     } else {
    //       alert("This is a palindrome!");
    //     }
    //   }
    });
  }
  checkWord();
});
