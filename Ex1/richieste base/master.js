
/*1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;*/

//lista utenti ammessi
var lista = ["utente1@gmail.com", "utente2@hotmail.com", "utente3@miodominio.it"];
console.log(lista)

//richiesta email
var emailUtente = prompt("Prego inserire indirizzo mail");

//cerca @ nel prompt (validazione)
var atTrovata;
for (var a = 0; a < emailUtente.length; a++) {
  if (emailUtente[a] == "@") {
    atTrovata = 1;
  }
}

//SE LA @ E' STATA TROVATA
if (atTrovata == 1) {
  //compara emailUtente a indirizzi nella lista
  var result;
  for (var i = 0; i < lista.length; i++){
    if (lista[i] == emailUtente) {
      result = 1;
    }
  }
  //risultato ricerca indirizzo
  var msg;
  if (result == 1) {
    msg = "L' indirizzo inserito è in lista, puoi accedere al portale."
  } else {
    msg = "Spiacente, l'indirizzo inserito non è in lista, non puoi accedere al portale."
  }
  document.getElementById('result').innerHTML = msg;

//SE LA @ NON E' STATA TROVATA
} else {
  alert("indirizzo errato")
}

//COME SI RICOMINCIA IL TUTTO IL PROCESSO DAL PROMPT??
