var gameover = false;
var rodada = 0;
var vitoriasPossiveis = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
]
var jogador1 = [];
var jogador2 = [];

function enviaId(position) {
  if (!gameover) {
    var x = position;
    if (rodada % 2 == 0) {
      document.getElementById(x).innerHTML = '<p class="center">X</p>';
      document.getElementById(x).removeAttribute('onclick');
      jogador1.push(x);
      jogador1.sort((a, b) => a - b);
      console.log(jogador1);
      rodada++;
    } else {
      document.getElementById(x).innerHTML = '<p class="center">O</p>';
      document.getElementById(x).removeAttribute('onclick');
      jogador2.push(x);
      jogador2.sort((a, b) => a - b);
      console.log(jogador2);
      rodada++;
    }
    verifyGameStatus(jogador1, jogador2);
  } else {
    alert('O jogo acabou. Comece novamente');
  }
}

function verifyGameStatus(j1, j2) {
  for (var j = 0; j < vitoriasPossiveis.length; j++) {
    if (arraysEqual(j1, vitoriasPossiveis[j])) {
      alert('Parabéns, Jogador 1. Você venceu!');
      gameover = true;
    } else {
      if (arraysEqual(j2, vitoriasPossiveis[j])) {
        alert('Parabéns, Jogador 2. Você venceu!');
        gameover = true;
      }
    }
  }
}

function arraysEqual(arr1, arr2) {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        count++;
      }
    }
    if (count == 3) {
      return true;
    }
  }
}

function btnStatus(x) {
  if (x == 1) {
    document.getElementById('btn1').className = 'btn btn-success'
    document.getElementById('btn2').disabled = true;
  } else {
    document.getElementById('btn2').className = 'btn btn-success'
    document.getElementById('btn1').disabled = true;
  }
}
