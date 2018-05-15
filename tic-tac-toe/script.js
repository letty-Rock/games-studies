

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

