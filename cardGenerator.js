
let values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbols = ["♥", "♠", "♦", "♣"];
let symbolColors = { "♥": "red", "♦": "red", "♠": "black", "♣": "black" };

let cardSymbolHeader = document.getElementById("card-symbol-header");
let cardValue = document.getElementById("card-value");
let cardSymbolFooter = document.getElementById("card-symbol-footer");

let getRandomElement = (cardsArray) => cardsArray[Math.floor(Math.random() * cardsArray.length)];

let randomValue = getRandomElement(values);
let randomSymbol = getRandomElement(symbols);
let randomColor = symbolColors[randomSymbol];

[cardSymbolHeader, cardSymbolFooter].forEach(element => {
  element.innerHTML = randomSymbol;
  element.style.color = randomColor;
});

cardValue.innerHTML = randomValue;
cardValue.style.color = randomColor;
