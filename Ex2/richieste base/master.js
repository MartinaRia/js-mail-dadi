/*1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
2 Gioco dei dadi, chi fa di più vince. */


//2 Gioco dei dadi, chi fa di più vince

var betOne = Math.floor(Math.random() * 100) + 1;

var betTwo = Math.floor(Math.random() * 100) + 1;

var msgOne = betOne
var msgTwo = betTwo

document.getElementById('dado1').innerHTML = msgOne
document.getElementById('dado2').innerHTML = msgTwo

var result

if (betOne > betTwo) {
  result = "Dado 1"
} else {
  result = "Dado 2"
}

document.getElementById('risultato').innerHTML = result
