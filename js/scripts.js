//business logic
let ruby = 0;
let csharp = 0;
let js = 0;

function tallyResults(a) {
  if (a === ruby) {
    ruby += 1;
  } else if (a === csharp) {
    csharp += 1;
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