var gameover = false;
var rodada = 0;
<<<<<<< HEAD
var winCombos = [
=======
var vitoriasPossiveis = [
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
]
<<<<<<< HEAD
var player1 = [];
var player2 = [];
=======
var jogador1 = [];
var jogador2 = [];
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd

function enviaId(position) {
  if (!gameover) {
    var x = position;
    if (rodada % 2 == 0) {
      document.getElementById(x).innerHTML = '<p class="center">X</p>';
      document.getElementById(x).removeAttribute('onclick');
<<<<<<< HEAD
      player1.push(x);
      player1.sort((a, b) => a - b);
=======
      jogador1.push(x);
      jogador1.sort((a, b) => a - b);
      console.log(jogador1);
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd
      rodada++;
    } else {
      document.getElementById(x).innerHTML = '<p class="center">O</p>';
      document.getElementById(x).removeAttribute('onclick');
<<<<<<< HEAD
      player2.push(x);
      player2.sort((a, b) => a - b);
      rodada++;
    }
    verifyGameStatus(player1, player2);
  } 
  else {
    alert('The game is over. Restart the game');
=======
      jogador2.push(x);
      jogador2.sort((a, b) => a - b);
      console.log(jogador2);
      rodada++;
    }
    verifyGameStatus(jogador1, jogador2);
  } else {
    alert('O jogo acabou. Comece novamente');
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd
  }
}

function verifyGameStatus(j1, j2) {
<<<<<<< HEAD
  for (var j = 0; j < winCombos.length; j++) {
    if (arraysEqual(j1, winCombos[j])) {
      gameover = true;
      document.getElementById("winner").innerHTML = '<p>Congratulations, player 1. You win!</p>';
    } 
    else {
      if (arraysEqual(j2, winCombos[j])) {
        gameover = true;
        document.getElementById("winner").innerHTML = 'Congratulations, player 2. You win!';
=======
  for (var j = 0; j < vitoriasPossiveis.length; j++) {
    if (arraysEqual(j1, vitoriasPossiveis[j])) {
      alert('Parabéns, Jogador 1. Você venceu!');
      gameover = true;
    } else {
      if (arraysEqual(j2, vitoriasPossiveis[j])) {
        alert('Parabéns, Jogador 2. Você venceu!');
        gameover = true;
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd
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
<<<<<<< HEAD
  } 
  else {
=======
  } else {
>>>>>>> b3e7924717ec6ac0d81001c67c0b3c4ce5332ccd
    document.getElementById('btn2').className = 'btn btn-success'
    document.getElementById('btn1').disabled = true;
  }
}
