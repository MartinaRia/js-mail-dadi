
//lista utenti ammessi (array)
var lista = ["utente1@gmail.com", "utente2@hotmail.com", "utente3@miodominio.it"];
console.log(lista)

//chiedi email
var emailUtente = prompt("Prego inserire indirizzo mail");

for (var a = 0; a < emailUtente.length; a++) {
  if ((emailUtente[a] == "@") && ((emailUtente[a] == ".it") || (emailUtente[a] == ".com"))) {
      console.log("ok")
  }
}

alert("L' indirizzo insertito non è valido");

var emailUtente = prompt("Prego inserire indirizzo mail");
