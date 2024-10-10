const transport = {
  speed: 140,
  color: "red",
  move: function () {
    console.log("I am moving");
  },
  // type: {
  //     model: "X",
  //     typeOfFule: "gas"
  // }
};

const prop = "speed";

console.log(transport.prop);
console.log(transport[prop]);

console.log(transport.speed);
console.log(transport["speed"]);

// transport.move();

// Math.min();

// nameOfArray.map();

//создаем потомка от transport
const car = {
  model: "Tesla Model 3",
 __proto__: transport,
};

console.log(car.model);
console.log(car.speed);

// пример создания объекта с помощью конструктора
const ship = new Object();
//const ship = {}; // с помощью литерала
console.log(ship.year);


ship.year =1996;
console.log(ship.year);


Object.setPrototypeOf(ship, transport);
ship.move();