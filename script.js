// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const gridElements = document.querySelector("#grid");
let squareNumber = 1;

// faccio una griglia 10 * 10 

for(let i = 0; i < 100; i++) {

    //creo 100 div che avranno come classe square 
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    console.log(newElement);

    //gli inserisco all'interno della griglia 
    gridElements.append(newElement)

    newElement.innerText = squareNumber;
    squareNumber += 1;
}