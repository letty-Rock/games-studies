var gameover = false;
var rodada = 0;
var winCombos = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
]
var player1 = [];
var player2 = [];

function enviaId(position) {
  if (!gameover) {
    var x = position;
    if (rodada % 2 == 0) {
      document.getElementById(x).innerHTML = '<p class="center">X</p>';
      document.getElementById(x).removeAttribute('onclick');
      player1.push(x);
      player1.sort((a, b) => a - b);
      rodada++;
    } else {
      document.getElementById(x).innerHTML = '<p class="center">O</p>';
      document.getElementById(x).removeAttribute('onclick');
      player2.push(x);
      player2.sort((a, b) => a - b);
      rodada++;
    }
    verifyGameStatus(player1, player2);
  } 
  else {
    alert('The game is over. Restart the game');
  }
}

function verifyGameStatus(j1, j2) {
  for (var j = 0; j < winCombos.length; j++) {
    if (arraysEqual(j1, winCombos[j])) {
      gameover = true;
      document.getElementById("winner").innerHTML = '<p>Congratulations, player 1. You win!</p>';
    } 
    else {
      if (arraysEqual(j2, winCombos[j])) {
        gameover = true;
        document.getElementById("winner").innerHTML = 'Congratulations, player 2. You win!';
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
  } 
  else {
    document.getElementById('btn2').className = 'btn btn-success'
    document.getElementById('btn1').disabled = true;
  }
}
