// State Data
var appData = {
  competitors: [
    "Nafeu", "Vika", "Johnny"
  ],
  results: [
    // { date: "Feb 19th", scores: [0, 0, 0] },
    // { date: "Feb 20th", scores: [0, 0, 1] },
    // { date: "Feb 21st", scores: [0, 0, 0] },
    // { date: "Feb 22nd", scores: [0, 0, 0], class: "end-of-week"},
    { date: "Feb 19th - Feb 22nd", scores: [0, 0, 1], class: "end-of-week"},
    // { date: "Feb 25th", scores: [1, 0, 0] },
    // { date: "Feb 26th", scores: [0, 0, 0] },
    // { date: "Feb 27th", scores: [0, 1, 0] },
    // { date: "Feb 28th", scores: [0, 0, 1] },
    // { date: "Mar 1st", scores: [0, 1, 0], class: "end-of-week"},
    { date: "Feb 25th - Mar 1st", scores: [0, 1, 0], class: "end-of-week"},
    { date: "Mar 4th", scores: [0, 0, 1] },
    { date: "Mar 5th", scores: [0, 0, 0] },
    { date: "Mar 6th", scores: [0, 0, 0] },
    { date: "Mar 7th", scores: [0, 0, 0] },
    { date: "Mar 8th", scores: [0, 0, 0], class: "end-of-week"},
    { date: "Mar 11th", scores: [0, 0, 0] },
    { date: "Mar 12th", scores: [1, 0, 0] },
    { date: "Mar 13th", scores: [0, 1, 0] },
    { date: "Mar 14th", scores: [0, 0, 0] },
    { date: "Mar 15th", scores: [1, 0, 0], class: "end-of-week"},
    { date: "Mar 18th", scores: [0, 0, 1] },
    { date: "Mar 19th", scores: [0, 1, 0] },
    { date: "Mar 20th", scores: [1, 0, 0] },
    { date: "Mar 21st", scores: [null, null, null] },
    { date: "Mar 22nd", scores: [null, null, null] },
  ]
}

$(document).ready(function(){
  appData.competitors.forEach(function(competitor){
    $("#score-headers").append($("<td>").text(competitor));
  });

  appData.results.forEach(function(result){
    $("#score-area").append(
      $("<tr/>", {class: getRowClass(result)})
        .append($("<td/>").text(result.date))
        .append($("<td/>").html(getScoreIcon(result.scores[0])))
        .append($("<td/>").html(getScoreIcon(result.scores[1])))
        .append($("<td/>").html(getScoreIcon(result.scores[2])))
    );
  });

});

function getScoreIcon(score) {
  if (score !== null) {
    if (score == 0) {
      return '<i class="fas fa-check"></i>';
    }
    return '<i class="fas fa-times"></i>';
  } else {
    return '<i class="far fa-square"></i>';
  }
}

function getRowClass(result) {
  if (result.class) {
    return result.class;
  }
  return "";
}
