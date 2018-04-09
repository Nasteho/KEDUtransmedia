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
function showResults() {
var score = 0;
for(var i = 0; i <= 12; i++) {
  var radios = document.getElementsByName('q'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "true" && radio.checked) {
      score++;
    }
  }
}
        document.getElementById("resultsAnswers").innerHTML = "Correct Responses: " + score;
        document.getElementById("resultsAnswers").style.color = "green";
        document.getElementById("submit").style.display = 'none';
        document.getElementById("nextstep").style.display = 'block';
        document.getElementById("nextstep").style.backgroundColor = "red";

      }

/*---------- */



function hideThisShowSecond() {
  kedupart.style.display = 'none';
  skattejagtquiz.style.display = 'block';
}
