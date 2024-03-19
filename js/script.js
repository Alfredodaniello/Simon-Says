/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

//Creo il mio array vuoto
const listNumbers = [];

//Genero 5 numeri casuali con un ciclo while
while (listNumbers.length < 5) {
    const numbers = Math.floor((Math.random() * 100) + 1);
    if (!listNumbers.includes(numbers)) {
        listNumbers.push(numbers)
    }
}
//Seleziono l'elemento del Dom e ci stampo il mio array
document.querySelector("#number").innerHTML = listNumbers;
//Li faccio scomparire dopo 30 sec
setTimeout(function() {
    document.querySelector("#number").innerHTML = "";
}, 30000)
//Chiedo all'utente di inserire 5 numeri dopo che i numeri sono scomparsi
//Creo l'arrey con i numeri inseriti dall'utente
const UserNumberList = [];

setTimeout(function() {
    for (i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt("Inserisci il tuo numero!"))
        UserNumberList.push(userNumber);
        const rightNumbers = [];
        //Controllo che i numeri inseriti dall'utente siano presenti nell'array generato
        //Se sono presenti li pusho
        for (let i = 0; i < 5; i++) {
            if (listNumbers.includes(UserNumberList[i])) {
                rightNumbers.push(UserNumberList[i]);
            }
        }

        //Stampo i risultati nel dom
        const score = rightNumbers.length;
        const scoreMessage = "Il tuo punteggio è: " + score;
        let resultMessage;

        if (score === 0) {
            resultMessage = "Non hai indovinato nessun numero";
        } else {
            resultMessage = "Questi sono i numeri che hai individuato: " + rightNumbers
        }

        document.querySelector("#score").innerHTML = scoreMessage;
        document.querySelector("#right_numbers").innerHTML = resultMessage;
    }
}, 30500);








