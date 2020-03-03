'use strict'

const credits = 23580;

const pricePerDroid = 3000;

let countDroidToBuy = prompt("How many droids do you want to buy?");

let message;

let totalPrice;

let creditsLeft;

if (countDroidToBuy === null) {
    console.log(message = "Отменено пользователем!");
    alert(message);
} else (countDroidToBuy > 0) 
    totalPrice = countDroidToBuy * pricePerDroid;
    console.log(totalPrice);

if (totalPrice > credits) {
    alert(message = "Недостаточно средств на счету");
} else {
    creditsLeft = credits - totalPrice;
    alert(message = `Вы купили ${countDroidToBuy} дроидов, на счету осталось ${creditsLeft} кредитов`);
}

