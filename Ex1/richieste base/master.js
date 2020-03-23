/*1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
2 Gioco dei dadi, chi fa di più vince. */


//1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;



//lista utenti ammessi (array)
var lista = ["utente1@gmail.com", "utente2@hotmail.com", "utente3@miodominio.it"];
//
//Chiedi email
var emailUtente = prompt("Prego inserire indirizzo mail");


var result

for (var i = 0; i < lista.length; i++){
  if (lista[i] == emailUtente) {
    result = 1
  }
}

var msg
if (result == 1) {
  msg = "you did it!"
} else {
  msg = "fuck you"
}

console.log(msg)
