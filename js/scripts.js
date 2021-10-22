let ruby = 0;
let csharp = 0;
let js = 0;

function tallyResults(selection) {
  if (selection === "ruby") {
    ruby += 1;
  } else if (selection === "csharp") {
    csharp += 1;
  } else if (selection === "js") {
    js += 1;
  }
}

function coinToss(a, b) {
  if (Math.random() > 0.5) {
    return a;
  } else {
    return b;
  }
}

  function winner(a, b, c) {
    if (a > b && a > c) {
      return "Ruby";
    } else if (b > a && b > c) {
      return "C#"
    } else if (c > b && c > a) {
      return "JavaScript"
    } else if (a === b) {
      return coinToss("Ruby", "C#");
    } else if (a === c) {
      return coinToss("Ruby", "JavaScript");
    } else {
      return coinToss("C#", "Javascript");
    }
  }

function getPercent(result) {
  return ((result / 7) * 100).toFixed(2);
}

function setClass(winnerLang) {
  $("body, .jumbotron, .card").removeClass("ruby csharp js");
  if (winnerLang === "Ruby") {
    $("#resultruby").show();
    $("#resultjs, #resultcsharp").hide();
    $("body, .jumbotron, .card").addClass("ruby");
  } else if (winnerLang === "C#") {
    $("#resultcsharp").show();
    $("#resultjs, #resultruby").hide();
    $("body, .jumbotron, .card").addClass("csharp");
  } else {
    $("#resultjs").show();
    $("#resultruby, #resultcsharp").hide();
    $("body, .jumbotron, .card").addClass("js");
  }
}

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    const name = $("#name").val();
    tallyResults($("input:radio[name=hobby]:checked").val());
    tallyResults($("input:radio[name=tv]:checked").val());
    tallyResults($("input:radio[name=exercise]:checked").val());
    tallyResults($("input:radio[name=app1]:checked").val());
    tallyResults($("input:radio[name=app2]:checked").val());
    tallyResults($("input:radio[name=app3]:checked").val());
    tallyResults($("input:radio[name=app4]:checked").val());

    $("#name-output").text(name);
    const lang = winner(ruby, csharp, js);
    $("#lang-output").text(lang);
    setClass(lang);
    $("#results").delay(100).slideDown(600);
    $("#quiz").trigger("reset");

    $("#rubypercent").text(getPercent(ruby));
    $("#csharppercent").text(getPercent(csharp));
    $("#jspercent").text(getPercent(js));
    
    ruby = 0;
    csharp = 0;
    js = 0;
  });
});