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
      score++; /* tilføjer én til score hvis den valgte radio button og radiobuttons matcher*/
    }
    if (score >= 3) {
      document.getElementById("svar").innerHTML = "Tillykke du har hjulpet Malene med at huske igen! Tryk næste for at se hvad hun har at fortælle";
      svar.style.color = "green";
      submit.style.display = 'none';
      nextstep.style.display = 'block';
      document.getElementById("resultsAnswers").style.color = "green";
    } else {
      document.getElementById("svar").innerHTML = "Malene kan stadig ikke huske ikke, tag testen igen for at hjælpe hende";
      document.getElementById("resultsAnswers").style.color = "red";
      document.getElementById("resultsAnswers").style.fontWeight = "700";
      svar.style.color = "red";
      submit.style.display = 'block';
      nextstep.style.display = 'none';

    }
  }
}
        document.getElementById("resultsAnswers").innerHTML = "Korrekte resultater: " + score + " / 4";

        document.getElementById("nextstep").style.backgroundColor = "white";
        document.getElementById("nextstep").style.color = "#00a19b";

      }

/* ---------- */





function hideThisShowSecond() {
  kedupart.style.display = 'none';
  skattejagtquiz.style.display = 'block';
  finalstep.style.display = 'none';
}

function showFinalStep() {
  kedupart.style.display = 'none';
  skattejagtquiz.style.display = 'none';
  finalstep.style.display = 'block';
}
