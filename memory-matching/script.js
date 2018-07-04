var cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var count = 0, temp1 = 0, temp2 = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function start(array) {
  shuffle(array);
  for (let i = array.length - 1; i > -1; i--) {
    document.getElementById(i).innerHTML = array[i];
  }
}

function virarCarta(x) {
  count++;
  if (count == 1) {
    temp1 = x;
    document.getElementById(x).style.backgroundColor = "white";
  } else {
    document.getElementById(x).style.backgroundColor = "white";
    temp2 = x;
    count = 0;
    if (cartas[temp1] == cartas[temp2]) {
      alert("Acerto!");
    } else {
      setTimeout(() => {
        limparCartas();
      }, 500);
    }
  }
}

function limparCartas() {
  document.getElementById(temp1).style.backgroundColor = "brown";
  document.getElementById(temp2).style.backgroundColor = "brown";
}