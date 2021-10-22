// //business logic
// let ruby = 0;
// let csharp = 0;
// let js = 0;

// function tallyResults(selection) {
//   if (selection === ruby) {
//     ruby += 1;
//   } else if (selection === csharp) {
//     csharp += 1;
//   } else if (selection === js) {
//     js += 1;
//   }
// }

// function winner(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   } //add function to determine tiebreaker by coin toss?
// }

//user interface logic
// function setClass(winnerLang) {
//   $("body").removeClass();
//   if (winnerLang === ruby) {
//     $("#result-output").append("<img src='ruby.jpeg'>");
//     $("body").addClass("ruby");
//   } else if (winnerLang === csharp) {
//     $("#result-output").append("<img src='csharp.jpeg'>");
//     $("body").addClass("csharp");
//   } else {
//     $("#result-output").append("<img src='js.jpg'>");
//     $("body").addClass("js");
//   }
// }

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    const name = $("#name").val();
    // tallyResults($("input:radio[name=hobby]:checked").val());
    // tallyResults($("input:radio[name=tv]:checked").val());
    // tallyResults($("input:radio[name=exercise]:checked").val());
    // tallyResults($("input:radio[name=app1]:checked").val());
    // tallyResults($("input:radio[name=app2]:checked").val());
    // tallyResults($("input:radio[name=app3]:checked").val());

    $("#name-output").text(name);
    // const lang = winner(ruby, csharp, js);
    // $("#lang-output").text(lang);
    // setClass(lang);
    $("#result").show();
    
    //delay(400).slideDown(1200);

    //Add % of each function?
    
  });
});


/*
on submit I want to:
gather info
rn tally function
hobby
tv
exercise
app1
app2
app3
show results

*/