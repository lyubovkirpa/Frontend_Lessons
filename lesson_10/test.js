//TODO  Объявление переменных

let hello = "hello, node.js!";
// hello = 100

let student;
student = "Vladimir";
student = "Mykola";

console.log(student);
console.log(hello);
console.log(typeof hello);

//TODO
//!
//*
//?

const language = "JavaScript";
// language = 'Python'

//! мы не будем использовать var для работы с переменными

//? примитивные типы данных в JS
//* string - строка

let planet = "Earth";

// конкатенация
let greeting = `Мы с планеты ` + planet;
console.log(greeting);

// шаблонная строка
let greeting1 = `Мы с планеты ${planet}. Она находится в солнечной системе!`;
console.log(greeting);

//* number
let n1 = 42;
let n2 = 3.14;

console.log("это числа:", n1, n2);

let lastSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(lastSafeInteger);

//* boolean - булевое значение
let isStudent = true;
let isBackend = false;

//* undefined - неопределенное значение

// без кавычек это переменные, поэтомы получим ошибку
// let value;
// console.log(value);

let object;
console.log(object);

//* null - пустое значение, т.е. отсутствие значения
let user = null;

//* bigint - большое число(больше чем Number.MAX_SAFE_INTEGER)
let bigNumber = 1000n;
let bigResult = 1000n + 100n;

//* symbol - символ (чаще исп в объектах как идентификатор), исп редко
let symbolId = Symbol(10);
// console.log(symbolId);

//TODO    Операции над данными
//приведение в строку
//неявное
let sum = 14 + 2 + "2";
console.log(sum);

//явное
let sum1 = String(42) + " - ответ";
console.log(sum1);

//* преобразование в число
let sum2 = 2 + Number("2");
console.log(sum2);

let sum3 = 1000 + Number("100$");
console.log(sum3);
console.log(typeof sum3);

//* явное через parsInt()
let sum4 = 1000 + parseInt("100$");
console.log(sum4);

//* логическое преобразование в булевое значение
//? false
//? 0
//? null
//? undefined
//? " " ' ' пустая строка
//? NAN
//? 0n(bigint)
//? -0

//? осальное  true

let b1 = Boolean("");
let b2 = Boolean(100);

//TODO  Математические операторы
let v1 = 12 + 45;
let v2 = 10 - 5;
let v3 = 2 * 2;
let v4 = 10 ** 10;
let v5 = 8 / 4;
let v6 = 13 % 2;
let v7 = Math.sqrt(16);

console.log(v7);

//случ число от 1 до 0
let random = Math.random();

//случ число от 1 до 100
let random1 = Math.floor(Math.random() * 100) + 1;

console.log(random);
console.log(random1);

// операторы сравнения
// > < >= <= == === 
// == это равенство с пиведением типов
// === это строгое равенство (рекомендуется к использованию)

let result = 
console.log(25 == "25");

// в node нет глоб объекта document

