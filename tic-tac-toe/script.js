

var rodada = 0;



function enviaId(position) {
  var x = position;

  if (rodada % 2 == 0) {
    document.getElementById(x).innerHTML = '<p class="center">X</p>';
    document.getElementById(x).removeAttribute('onclick');
    rodada++;
  }
  else {
    document.getElementById(x).innerHTML = '<p class="center">O</p>';
    document.getElementById(x).removeAttribute('onclick');
    rodada++;
  }
}

function btnStatus(x) {
  if (x == 1) {
    document.getElementById('btn1').className = 'btn btn-success'
    document.getElementById('btn2').disabled = true;
  }
  else {
    document.getElementById('btn2').className = 'btn btn-success'
    document.getElementById('btn1').disabled = true;
  }
}