
'use strict'


let total = 0;
let inputNumber;

do  { 
    inputNumber = prompt('Please, enter the number');
    
    if(Number.isNaN(Number(inputNumber)) || inputNumber==="")
    {
        alert("Пожалуйста, введите число")
    } else {
        total = Number(inputNumber) + total;
    }
}

while (inputNumber !== null) 
    alert(`Общая сумма чисeл равна ${total}`);
