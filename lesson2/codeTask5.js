"use strict";


/**
 * Функция складывает 2 числа.
 * @param {Number} num1 Первое число.
 * @param {Number} num2 Второе число.
 * @returns {Number} Результат.
 */
function summNumb(num1, num2) {
    return num1 + num2;
}

/**
 * Функция вычитает первое число из второго.
 * @param {Number} num1 Первое число.
 * @param {Number} num2 Второе число.
 * @returns {Number} Результат.
 */
function diffNumb(num1, num2) {
    return num1 - num2;
}

/**
 * Функция делит первое число на второе число.
 * @param {Number} num1 Первое число.
 * @param {Number} num2 Второе число.
 * @returns {Number} Результат.
 */
function divNumb(num1, num2) {
    return num1 / num2;
}

/**
 * Функция умножает 2 числа.
 * @param {Number} num1 Первое число.
 * @param {Number} num2 Второе число.
 * @returns {Number} Результат.
 */
function multiNumb(num1, num2) {
    return num1 * num2;
}

/**
 * Функция выполняет арифметическую операцию на выбор и возвращает результат.
 * @param {Number} arg1 Первое число.
 * @param {Number} arg2 Второе число.
 * @param {String} operation Тип арифметической операции. (Поддерживаемые значения: "+" "-" "*" "/")
 * @returns {Number} Результат.
 */
function mathOperation(arg1, arg2, operation) {
    if (operation === "+") {
        result = summNumb(arg1, arg2);
    } else if (operation === "-") {
        result = diffNumb(arg1, arg2);
    } else if (operation === "*") {
        result = multiNumb(arg1, arg2);
    } else if (operation === "/") {
        result = divNumb(arg1, arg2); 
    } else {
        return 'Вы ввели неверный знак для операции!';
    }

    if (isNaN(result)) {
        return 'Необходимо вводить числа!';
    } else {
        return `Результат операции "${arg1} ${operation} ${arg2}" равен ${result}.`;
    }
}


let userArg1 = parseInt(prompt('Введите первое число: '));
let userArg2 = parseInt(prompt('Введите второе число: '));
let operationType = prompt('Выберите знак операции \n(Поддерживаемые значения: "+" "-" "*" "/" (ВВОДИТЬ БЕЗ КАВЫЧЕК!))');
let result = undefined;

alert(mathOperation(userArg1, userArg2, operationType));
