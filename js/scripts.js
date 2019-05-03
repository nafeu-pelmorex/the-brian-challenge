var rulesArea, owesArea, loserArea,
    scoresArea, cardAreas, cardColumns,
    scoreTable, scoreHeaders;

var totalScoreNafeu, totalScoreVika, totalScoreJohnny;

var THIRTY_SECONDS = 30000;

var appData = {
  competitors: [
    "Nafeu", "Vika", "Johnny"
  ],
  results: [
    // { date: "Feb 19th", scores: [0, 0, 0] },
    // { date: "Feb 20th", scores: [0, 0, 1] },
    // { date: "Feb 21st", scores: [0, 0, 0] },
    // { date: "Feb 22nd", scores: [0, 0, 0], class: "end-of-week"},
    { date: "Feb 19th - Feb 22nd", scores: [2, 2, 3], class: "end-of-week"},
    // { date: "Feb 25th", scores: [1, 0, 0] },
    // { date: "Feb 26th", scores: [0, 0, 0] },
    // { date: "Feb 27th", scores: [0, 1, 0] },
    // { date: "Feb 28th", scores: [0, 0, 1] },
    // { date: "Mar 1st", scores: [0, 1, 0], class: "end-of-week"},
    { date: "Feb 25th - Mar 1st", scores: [2, 3, 2], class: "end-of-week"},
    // { date: "Mar 4th", scores: [0, 0, 1] },
    // { date: "Mar 5th", scores: [0, 0, 0] },
    // { date: "Mar 6th", scores: [0, 0, 0] },
    // { date: "Mar 7th", scores: [0, 0, 0] },
    // { date: "Mar 8th", scores: [0, 0, 0], class: "end-of-week"},
    { date: "Mar 4th - Mar 8th", scores: [2, 2, 3], class: "end-of-week"},
    // { date: "Mar 11th", scores: [0, 0, 0] },
    // { date: "Mar 12th", scores: [1, 0, 0] },
    // { date: "Mar 13th", scores: [0, 1, 0] },
    // { date: "Mar 14th", scores: [0, 0, 0] },
    // { date: "Mar 15th", scores: [1, 0, 0], class: "end-of-week"},
    { date: "Mar 11th - Mar 15th", scores: [3, 2, 2], class: "end-of-week"},
    // { date: "Mar 18th", scores: [0, 0, 1] },
    // { date: "Mar 19th", scores: [0, 1, 0] },
    // { date: "Mar 20th", scores: [1, 0, 0] },
    // { date: "Mar 21st", scores: [0, 1, 0] },
    // { date: "Mar 22nd", scores: [1, 0, 0], class: "end-of-week" },
    { date: "Mar 18th - Mar 22nd", scores: [3, 2, 2], class: "end-of-week" },
    // { date: "Mar 25th", scores: [1, 0, 0] },
    // { date: "Mar 26th", scores: [0, 0, 0] },
    // { date: "Mar 27th", scores: [0, 1, 0] },
    // { date: "Mar 28th", scores: [0, 1, 0] },
    // { date: "Mar 29th", scores: [1, 0, 0], class: "end-of-week" },
    { date: "Mar 25 - Mar 29th", scores: [2, 3, 2], class: "end-of-week" },
    // { date: "Apr 1st", scores: [0, 1, 0] },
    // { date: "Apr 2nd", scores: [1, 0, 0] },
    // { date: "Apr 3rd", scores: [0, 1, 0] },
    // { date: "Apr 4th", scores: [0, 1, 0] },
    // { date: "Apr 5th", scores: [0, 1, 0], class: "end-of-week" },
    { date: "Apr 1st - Apr 5th", scores: [2, 3, 2], class: "end-of-week" },
    // { date: "Apr 8th", scores: [0, 1, 0] },
    // { date: "Apr 9th", scores: [0, 1, 0] },
    // { date: "Apr 10th", scores: [0, 1, 0] },
    // { date: "Apr 11th", scores: [1, 0, 0] },
    // { date: "Apr 12th", scores: [1, 0, 0], class: "end-of-week" },
    { date: "Apr 8th - Apr 12th", scores: [2, 3, 2], class: "end-of-week" },
    // { date: "Apr 15th", scores: [0, 0, 0] },
    // { date: "Apr 16th", scores: [0, 1, 0] },
    // { date: "Apr 17th", scores: [1, 0, 0] },
    // { date: "Apr 18th", scores: [0, 0, 1] },
    // { date: "Apr 19th", scores: [0, 0, 0], class: "end-of-week" },
    { date: "Apr 15th - Apr 19th", scores: [2, 3, 2], class: "end-of-week" },
    // { date: "Apr 22nd", scores: [0, 1, 0] },
    // { date: "Apr 23th", scores: [0, 1, 0] },
    // { date: "Apr 24th", scores: [0, 1, 0] },
    // { date: "Apr 25th", scores: [0, 1, 0] },
    // { date: "Apr 26th", scores: [0, 1, 0], class: "end-of-week" },
    { date: "Apr 22nd - Apr 26th", scores: [2, 3, 2], class: "end-of-week" },
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

function rotateAll() {
  hideCards();
  cardAreas.removeClass();
  cardAreas.addClass('card-area animated card mb-4');
  setColumnCount(2);
  showCards();
}

function showSection(section) {
  var additionalClasses = getRandomAnimation() + " single-view";
  switch(section) {
    case 'all':
      rotateAll();
      break;
    case 'rules':
      rotateArea(scoreSummaryArea, rulesArea, additionalClasses, 1);
      break;
    case 'owes':
      rotateArea(rulesArea, owesArea, additionalClasses, 1);
      break;
    case 'loser':
      rotateArea(owesArea, loserArea, additionalClasses, 1);
      break;
    case 'score-summary':
      rotateArea(loserArea, scoreSummaryArea, additionalClasses, 1);
      break;
    default:
      break;
  }
}

function getRandomAnimation() {
  var animations = [
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'flipInX ',
    'flipInY',
    'lightSpeedIn',
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rollIn',
    'zoomInDown',
    'zoomInLeft  ',
    'zoomInRight ',
    'zoomInUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
  ]

  return animations[Math.floor(Math.random()*animations.length)];
}

$(document).ready(function(){

  rulesArea = $('#rules-area');
  owesArea = $('#owes-area');
  loserArea = $('#loser-area');
  scoresArea = $('#scores-area');
  cardAreas = $('.card-area');
  cardColumns = $('.card-columns');
  scoreTable = $('#score-table');
  scoreHeaders = $('#score-headers');

  appData.competitors.forEach(function(competitor){
    scoreHeaders.append($("<td>").text(competitor));
  });

  appData.results.forEach(function(result){
    scoreTable.append(
      $("<tr/>", {class: getRowClass(result)})
        .append($("<td/>").text(result.date))
        .append($("<td/>").html(getScoreIcon(result.scores[0])))
        .append($("<td/>").html(getScoreIcon(result.scores[1])))
        .append($("<td/>").html(getScoreIcon(result.scores[2])))
    );
  });

  var slides = {
    sequence: [
      'all',
      'rules',
      'owes',
    ],
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
  }, THIRTY_SECONDS)

});

function getScoreIcon(score) {
  if (score === null) {
    return '<i class="far fa-square"></i>';
  } else if (score === 0) {
    return '<i class="text-info fas fa-check"></i>';
  } else if (score === 1) {
    return '<i class="fas fa-times"></i>';
  } else if (score === 2) {
    return '<i class="text-warning fas fa-medal"></i>';
  } else if (score === 3) {
    return '<i class="text-danger fas fa-thumbs-down"></i>';
  }
}

function getRowClass(result) {
  if (result.class) {
    return result.class;
  }
  return "";
}
