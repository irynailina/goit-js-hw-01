'use strict';

const total = 100;
const ordered = 50;
let message;
let userOrder = prompt('Make your order');

if (userOrder > total) {
    alert(message = 'На складе недостаточно товаров');
} else {
    alert(message = 'Заказ оформлен, с Вами свяжется менеджер');
}

