var rulesArea, owesArea, loserArea, scoresArea, cardAreas, cardColumns;

var TEN_SECONDS = 10000;

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
    { date: "Mar 21st", scores: [0, 1, 0] },
    { date: "Mar 22nd", scores: [null, null, null] },
  ]
}

function hideCards() {
  cardAreas.hide();
}

function showCards() {
  cardAreas.show();
}

function setColumnCount(count) {
  cardColumns.css({'column-count': count});
}

function rotateArea(previousCardSelector, currentCardSelector, additionalClasses, columnCount) {
  hideCards();
  previousCardSelector.removeClass(additionalClasses);
  setColumnCount(columnCount);
  currentCardSelector.addClass(additionalClasses);
  currentCardSelector.show();
}

function rotateAll(additionalClasses) {
  hideCards();
  cardAreas.removeClass(additionalClasses);
  setColumnCount(2);
  showCards();
}

function showSection(section) {
  switch(section) {
    case 'all':
      rotateAll('fadeInUpBig text-big');
      break;
    case 'rules':
      rotateArea(scoresArea, rulesArea, 'fadeInUpBig text-big', 1);
      break;
    case 'owes':
      rotateArea(rulesArea, owesArea, 'fadeInUpBig text-big', 1);
      break;
    case 'loser':
      rotateArea(owesArea, loserArea, 'fadeInUpBig text-big', 1);
      break;
    case 'scores':
      rotateArea(loserArea, scoresArea, 'fadeInUpBig text-big', 1);
      break;
    default:
      break;
  }
}

$(document).ready(function(){

  rulesArea = $('#rules-area');
  owesArea = $('#owes-area');
  loserArea = $('#loser-area');
  scoresArea = $('#scores-area');
  cardAreas = $('.card-area');
  cardColumns = $('.card-columns');

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

  var slides = {
    sequence: ['all', 'rules', 'owes', 'loser', 'scores'],
    currentSlideIndex: 0,
    getNextSlide: function() {
      if (slides.currentSlideIndex === slides.sequence.length - 1) {
        slides.currentSlideIndex = 0;
        console.log(slides.currentSlideIndex);
        return slides.sequence[slides.currentSlideIndex];
      } else {
        slides.currentSlideIndex += 1;
        console.log(slides.currentSlideIndex);
        return slides.sequence[slides.currentSlideIndex];
      }
    },
  };

  setColumnCount(2);
  setInterval(function(){
    console.log('Rotating...');
    showSection(slides.getNextSlide());
  }, TEN_SECONDS)

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
