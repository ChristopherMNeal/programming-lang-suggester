//business logic
let ruby = 0;
let csharp = 0;
let js = 0;

function tallyResults(selection) {
  if (selection === ruby) {
    ruby += 1;
  } else if (selection === csharp) {
    csharp += 1;
  } else if (selection === js) {
    js += 1;
  }
}

//user interface logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault;
    
    const name = $("input#name").val();
    tallyResults($("input:radio[name=hobby]:checked").val());
    tallyResults($("input:radio[name=tv]:checked").val());
    tallyResults($("input:radio[name=exercise]:checked").val());
    tallyResults($("input:radio[name=app1]:checked").val());
    tallyResults($("input:radio[name=app2]:checked").val());
    tallyResults($("input:radio[name=app3]:checked").val());

    const lang = ////winner function returns lang
    $("#name-output").text(name);
    $("#lang-output").text(lang);
    if (lang === ruby) {
      $("#result-output").append("<img src='ruby.jpeg'>");
      $("body")addClass("ruby");
    } else if (lang === csharp) {
      $("#result-output").append("<img src='csharp.jpeg'>");
      $("body").addClass("csharp");
    } else {
      $("#result-output").append("<img src='js.jpg'>");
      $("body").addClass("js");
    }
    $("#result").delay(400).slideDown(1200);

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