// Business (or back-end) logic:

if(answer1 == "ECMA6") {
correct+ = 10;
}

if(answer2 == "HTML") {
 correct+ = 10;
}

if(answer3 == "Yes") {
 correct+ = 10;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $(#submit).click(fuction(event) {
    event.preventdefault();
    var answer1= document.quiz.answer1.val();
    var answer2= document.quiz.answer2.val();
    var answer3= document.quiz.answer3.val();
    var correct=0;
    $("#quiz").hide();
    $("#score").show()
  });
});
