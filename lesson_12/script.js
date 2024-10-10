//TODO  Function - функция
// переиспользование
// структурирование кода
// важная часть функции - return(возвращаемое значение)
// если у функции нет возвр значения, то она вернет undefined

//* function

// hoisting(поднятие), вызов ф до ее объявления

//объявление функции через function

function helloWord(value) {
  if (typeof value === "string" || typeof value === "number") {
    return `Hello, ${value}!`;
  }

  // выбрасываем ошибку
  throw new Error("give me string value, please");
}

const greeting1 = helloWord("JS");
const greeting2 = helloWord("sun");
const greeting3 = helloWord(42);

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);

//*  function expression - объявление в переменной + кл. слово function
const sum = function (num1, num2) {
  return num1 + num2;
};

const sumResult = sum(50, 30);
console.log(sumResult);

//* стрелочные функции - arrow function
// =>

const multiply = (a, b, c) => a * b * c;

const multiply1 = (a, b, c) => {
  const result = a * b * c;
  return `${result} - это результат умножения ${a}, ${b} и ${c}`;
};

console.log(multiply1(10, 2, 3));


//TODO методы массивов
const brothers = [
    { name: "Legolas", height: 190, race: "elf", age: 500, hasMagic: true },
    { name: "Ghimli", height: 50, race: "dwarf", age: 200, hasMagic: false },
    { name: "Aragorn", height: 190, race: "human", age: 50, hasMagic: false },
    { name: "Gendalf", height: 200, race: "magician", age: 2000, hasMagic: true },
  ];
  
  let frodo = {
    name: "Frodo",
    height: 150,
    race: "hobbit",
    age: 33,
    hasMagic: false,
  };
  
  console.log("новая длина массива", brothers.push(frodo));
  
  console.log(brothers);
  
  //* map()
  // немутирующий
  //1.
  const brotherNames = brothers.map((brother) => brother.name);
  console.log(brotherNames);
  
  //2.
  const brotherAges = brothers.map((brother) => brother.age);
  console.log(brotherAges);
  
  
  //3.
  const brotherNamesAndAges = brothers.map((element) => {
    return element.name + " " + element.age;
  });
  console.log(brotherNamesAndAges);
  
  //* filter()
  // немутирующий
  // если таких эл нет, выведет пустой массив
  console.log(
    brothers.filter((brother) => brother.age > 100 && brother.hasMagic === true)
  );
  
  //* find()
  // немутирующий
  console.log(brothers.find((brother) => brother.race === "hobbit"));
  console.log(brothers.find((brother) => brother.age > 100));
  
  
  //* reduse()
  // немутирующий
  
  let sum1 = 0;
  for (let i = 0; i < brotherAges.length; i++) {
    sum1+= brotherAges[i];  
  }
  console.log("сумма возрастов циклом:",sum1);
  
  // с reduse()
  let sum2 = brotherAges.reduce((acc, current) => acc + current, 0)
  console.log("сумма возрастов с reduse():", sum2);
  
  //пример с массивом из объекта
  let sum3 = brothers.reduce((acc, curr) => acc + curr.age, 0)
  console.log("сумма возрастов с reduse (из объекта):", sum3);
  
  //splice()
  // 
//   console.log(sum3.splice(0, -2));