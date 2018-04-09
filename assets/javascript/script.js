function showKollega() {
  kollegacontent.style.display = 'block';
  differentformcontent.style.display = 'none';
  keducontent.style.display = 'none';

}

function showDifferentForm() {
  kollegacontent.style.display = 'none';
  differentformcontent.style.display = 'block';
  keducontent.style.display = 'none';

}

function showKedu() {
  kollegacontent.style.display = 'none';
  differentformcontent.style.display = 'none';
  keducontent.style.display = 'block';

}


function hideKollega () {
  kollegacontent.style.display = 'none';

}

function hideDifferentForm() {
  differentformcontent.style.display = 'none';
}


/*-------- transmedia se resultater -------*/
var answers = ["1","3","2","1"],
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName("radioName"); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}
