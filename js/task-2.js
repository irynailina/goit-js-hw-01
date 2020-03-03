'use strict';

const total = 100;
const ordered = 50;
let message;
const userOrder = prompt('Make your order');

if (userOrder > total) {
    message = 'На складе недостаточно товаров';
} else {
    message = 'Заказ оформлен, с Вами свяжется менеджер';
}

alert(message);
