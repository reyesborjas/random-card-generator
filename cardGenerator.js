
let values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbols = ["♥", "♠", "♦", "♣"];
let colors = ["red", "black"];


let cardSymbolHeader = document.getElementById("card-symbol-header");
let cardValue = document.getElementById("card-value");
let cardSymbolFooter = document.getElementById("card-symbol-footer");

let randomValue = values[Math.floor(Math.random() * values.length)];
let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
let randomColor;

if (randomSymbol === "♥" || randomSymbol==="♦") {
    randomColor="red"
    } else {
        randomColor="black"
    } 

cardSymbolHeader.innerHTML = randomSymbol;
cardSymbolFooter.innerHTML = randomSymbol;
cardValue.innerHTML = randomValue;


cardSymbolHeader.style.color = randomColor;
cardSymbolFooter.style.color = randomColor;
cardValue.style.color = randomColor;
