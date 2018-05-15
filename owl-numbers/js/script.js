var count = 0;
var random = Math.floor(Math.random() * 100 + 1);
console.log(random);

window.onload = function () {
  document.formulary.entry.focus();
};

function accept() {

  var x = document.querySelectorAll('.r1');
  x[0].style.display = 'unset';
  x[1].style.display = 'unset';
  x[2].style.display = 'unset';
  document.getElementById('btnRf').disabled = true;
}
function refuse() {
  var x = document.querySelectorAll('.r2');
  x[0].style.display = 'unset';
  document.getElementById('btnAc').disabled = true;
  document.getElementById('owl').src = 'img/cosmic-owl-out.gif'
  document.getElementById('owl').className = 'animated fadeOutRight'
}

function tries(count) {
  switch(true) {
    case (count < 5):
      if (count == 1) {
        document.getElementById('attempt').innerText = 'Just a try, you\'re worthy';
      }
      else {
        document.getElementById('attempt').innerText = count + ' attempts. You are worthy, use it wisely';
      }
      break;
    case (count <= 10):
      document.getElementById('attempt').innerText = count + ' attempts. Not bad';
      break;
    default:
      document.getElementById('attempt').innerText = count + ' attempts. I have my doubts as to its merit';
  }
}

function testNumber() {
  number = document.formulary.entry.value;

  count++;
  if(number == random) {
    document.getElementById('result').innerText = 'Well, well. Congratulations';
    tries(count);
  }
  else if (number < random) {
    document.getElementById('result').innerHTML = 'Tente um numero maior';
  }
  else {
    document.getElementById('result').innerHTML = 'Tente um numero menor';
  }
  document.formulary.entry.value = '';
return false;
}