let somma = 0;
function acquista() {
    let prodotto = prompt("Inserisci importo: ");
    console.log("il tipo di prezzo è " + typeof (prodotto));
    prodotto = parseFloat(prodotto);
    console.log("il tipo di prezzo è " + typeof (prodotto));
    if (isNaN(prodotto)) {
        alert("Si prega di aggiungere un numero")
    } else {
        somma += prodotto;
        console.log("Totale somma: " + somma + "€ ");
    }
    let p = document.getElementById("output");
    p.innerHTML = "Totale: " + somma + "€ ";


}