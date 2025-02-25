// chiedere all'utente quanti km percorrerà 

const kmAmount = parseFloat(prompt ("Quanti chilometri percorrerai?"));

// chiedere all'utente quanti anni ha

const userAge = parseInt(prompt ("Quanti anni hai?"));

// Calcolare prezzo intero del bigletto

const standardPrice = kmAmount * 0.21;

// Calcolare il prezzo in base all'età applicando eventuali sconti

let finalPrice;

if (userAge < 18) {
    finalPrice = ((standardPrice * 80) / 100);
} else if (userAge > 65) {
    finalPrice = ((standardPrice * 60) / 100);
} else {
    finalPrice = standardPrice;
}

// prezzo reso a due unità decimali

console.log(finalPrice.toFixed(2));