//TODO arrays - массивы
// сложный тип данных

const arr = [];
const numbers = [4, 15, 7, 42, 23];
const fruits = ["apple", "orange", "kiwi", "banana"];

// массив из разных типов данных
const arr1 = [1, "apple", undefined, true];

console.log(arr1);

//TODO  чтобы обратиться к элементу массива, исп его индекс
let kiwi = fruits[2];
console.log(kiwi);

let secret = fruits[10];
console.log(secret);

//TODO  for loop - цикл for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i], "под номером", i);
}

//TODO  while - цикл до тех пор, пока...
let i = 1;
while (i < 8) {
  console.log(i, "раз");
  // без изм i мы не выйдем из цикла
  i++;
}

//TODO  условный оператор
let isStudent = true;

if (isStudent) {
  console.log("похоже, что вы студент");
} else {
  console.log("кажется, что нет");
}

// методы добавл и удаления эл массива
// мутирующие - изменяют исходный массив
// немутирующие - не изменяют исходный массив

const animals = ["shark", "panda", "tiger", "otter"];
const snake = "snake";
const dog = " dog";

//* push() - метод добавления элемента в конец массива
// 1. изменяет исходный массив
// 2. возвращает длину измененного массива
animals.push(snake, dog);
console.log(animals);

const newLenhthOfAnimals = animals.push(snake, dog);
console.log(newLenhthOfAnimals);

//* pop() - метод удаления элемента из конца массива
// 1. изменяет исходный массив
// 2. возвращает удаленный элемент массива
animals.pop();
console.log(animals);

const returnValue = animals.pop();
console.log(returnValue);

//* unshift() - метод добаления элемента в начало массива
// 1. изменяет исходный массив
// 2. возвращает длину измененного массива
const returnValue3 = animals.unshift("panda");

console.log(animals);
console.log(returnValue3);

//* shift() - метод удаления элемента из начала массива
// 1. изменяет исходный массив/удаляет первый элемент массива
// 2. возвращает удаленный элемент массива
const returnValue4 = animals.shift();

console.log(animals);
console.log(returnValue4);

//* spread syntax - спред оператор
// работает только для одномерных массивов
// удобный  способ сделать копию массива
// spred - это ... / без них не распакуется массив
const newAnimals = [...animals];
console.log(newAnimals);

const mixedArr1 = [animals, fruits];

const mixedArr2 = [...animals, ...fruits];

console.log(mixedArr1);
console.log(mixedArr2);

//TODO создание глубокой копии для двумерных (и более) массивов с помощью structuredClone()
let copy = structuredClone(mixedArr1);

copy[0][1] = "polar bear";

console.log();
console.log(copy);

//!   ОБЪЕКТЫ
// объект - ссылочный тип данных
// ключ и значение
// ключи - это строковые значения

const person1 = {
  name: "John",
  lastName: "Johnson",
  age: 40,
  isAdult: true,
  isMarried: false,
  siblings: ["Emma", "Ron", "Ethan"],
};

const person2 = {
  name: "Emma",
  lastName: "Johnson",
  age: 45,
  isAdult: true,
  isMarried: true,
  siblings: ["John", "Ron", "Ethan"],
};

// частный случай массива состоящего из объектов
const family = [person1, person2];
console.log(family);

// к значениям объектов мы обращаемся по ключам через точку
console.log(person1.name, person2.lastName);

const personInfo =
  person2.name +
  " " +
  person2.lastName +
  "is sister of" +
  " " +
  person1.name +
  " " +
  person1.lastName;

console.log(personInfo);

const personInfo1 = `${person1.name}  ${person1.lastName} is braser of ${person2.name} ${person2.lastName}`;

console.log(personInfo1);

for (let i = 0; i < family.length; i++) {
  console.log(family[i].name, "is", family[i].age);
}

//как вариант обращения к значению по ключу через [] скобки:
const person3 = {
  name: "Bill",
  lastName: "Weber",
  age: 35,
  isAdult: true,
  isMarried: true,
  "brothers and sisters": ["Fred", "Ron", "Ethan"],
};
console.log(person3["brothers and sisters"]);

//
const variable = "hasWife";

const person4 = {
  name: "Bill",
  lastName: "Weber",
  age: 35,
  isAdult: true,
  [variable]: true,
  "brothers and sisters": ["Fred", "Ron", "Ethan"],
};
console.log(person4);

//* деструктурзация объектов

//* так выгл запииссь без деструктурзации
// const name = person1.name;
// const siblings = person1.siblings;
// const age = person1.age;


//пример деструктурзации
// 1. забираем данные из объекта по выбранным ключам
// 2. объявляем переменные с названиями, совпадающими с именами этих ключей
// 3. присваиваем значения в эти новые переменные
const { name, lastName, age, siblings } = person1;

console.log(name);
console.log(siblings);
console.log(age);


//* деструктурзация массивов
family.push(person3);

// console.log(family);

// const[ron, jinny, bill] = family;

// console.log(ron.name);
// console.log(jinny.name);
// console.log(bill.name);

//
const[, , bill] = family;
console.log(bill.name);



