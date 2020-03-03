'use strict'

const credits = 23580;

const pricePerDroid = 3000;

const countDroidToBuy = prompt("How many droids do you want to buy?");


if (countDroidToBuy === null) {
    console.log("Отменено пользователем!");
} else (countDroidToBuy > 0) 
    let totalPrice = countDroidToBuy * pricePerDroid;

if (totalPrice > credits) {
    alert("Недостаточно средств на счету");
} else if (countDroidToBuy !== null) {
    let creditsLeft = credits - totalPrice;
    alert(`Вы купили ${countDroidToBuy} дроидов, на счету осталось ${creditsLeft} кредитов`);
}

