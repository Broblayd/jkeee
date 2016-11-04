
var name,
flagCountry,
tagUrl,
matches, 
win, 
draw, 
lose, 
score, 
goals, 
concededGoals, 
place, 
color;


var row = ('<tr/>');
var col = ('<td/>');
var arr = [];


//Get JSON data and append it


$.getJSON('https://raw.githubusercontent.com/sportsru/table-task/master/seriea.json', function(data){
  for (var teams in data) {

  }
 for (var teamid in data[teams]) {
  //Props that will not be in table              
            color = data[teams][teamid].color;
            tagUrl = data[teams][teamid]['tag_url'];
  //Props that will be in table
            place = data[teams][teamid].place;
            flagCountry = data[teams][teamid]['flag_country'];
            name = data[teams][teamid].name;
            matches = data[teams][teamid].matches;
            win = data[teams][teamid].win;
            draw = data[teams][teamid].draw;
            lose = data[teams][teamid].lose;
            goals = data[teams][teamid].goals;
            concededGoals = data[teams][teamid]['conceded_goals'];
            score = data[teams][teamid].score;            
 
     
     // arr.push(place,flagCountry,name,matches,win,draw,lose,goals,concededGoals,score);
  // arr.push(JSON.stringify(data[teams][teamid]));

              addTr(teamid);
              addTd(teamid,color,place,flagCountry,tagUrl,name,matches,win,draw,lose,goals,concededGoals,score);
              
    }

    for (var keys in data[teams][teamid]) {      
      }
   });
                  
function flag() {
  var i=0;
  var flag = $('.flagCountry');
  var name = $('.nameUrl');
  for (i; i<flag.length; i++){
       if (flag.eq(i).text() == "Италия") {
        name.eq(i).html('<img src="img/ita.png"> '+name.eq(i).text());
    flag.eq(i).hide();
  }
    }
        }

function changeColor() {
    var i = 0;
    var cell = $('.color');
    console.log(cell);
   for (i; i<cell.length; i++) {
    (cell.eq(i).text() == 1) ? $('.place').eq(i).css({background: '#00FF3C'}) :  
    (cell.eq(i).text() == 2) ? $('.place').eq(i).css({background: '#CDFFAB'}) :
    (cell.eq(i).text() == 4) ? $('.place').eq(i).css({background: '#EE7070'}) : 
     $('.place').eq(i).css({background: ''});
   }
      }

function addTr(id) {

  $('.teams').append('<div id="'+id+'" class="row"></div>');
      }

function addTd(id,color, place,flagCountry,tagUrl,name,matches,win,draw,lose,goals,concededGoals,score) {
    $('div#'+id).append('<div class="place" id="cell" width="40">' + place + '</div>');
    $('div#'+id).append('<div class="color" id="cell" style="display: none">' + color + '</div>');
    $('div#'+id).append('<div class="flagCountry" id="cell">' + flagCountry + '</div>');
    $('div#'+id).append('<div class="name" id="cell"><a class="nameUrl" href="' + tagUrl + '" target="_blank">' + name + '</a></div>');
    $('div#'+id).append('<div class="matches" id="cell">' + matches + '</div>');
    $('div#'+id).append('<div class="win" id="cell">' + win + '</div>');
    $('div#'+id).append('<div class="draw" id="cell">' + draw + '</div>');
    $('div#'+id).append('<div class="lose" id="cell">' + lose + '</div>');
    $('div#'+id).append('<div class="goals" id="cell">' + goals + '</div>');
    $('div#'+id).append('<div class="concededGoals" id="cell">' + concededGoals + '</div>');
    $('div#'+id).append('<div class="score" id="cell">' + score + '</td>');
    changeColor();
    flag();
      }

