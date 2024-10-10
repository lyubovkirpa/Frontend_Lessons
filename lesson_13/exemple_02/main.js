const JonnyDepp = {
  name: "Jonny",
  surname: "Depp",
  age: 50,
  hobbies: ["cricket", "bouling"],
  films: {
    years1999: ["Pirates1", "Edward"],
    years2003: ["Pirates2", "Pirates3"],
  },
  singing: function () {
    console.log("I am singing");
  },
};
// console.log(JonnyDepp.singing());
JonnyDepp.singing();

const RikkiMartinConcert24051998 = {
  city: "Berlin",
  date: "1998-05-25 14:00",
  bilets: 8000,
  songs: ["La la la", "Da vida Loca "],
};

console.log(JonnyDepp.name);
console.log(JonnyDepp["name"]);

JonnyDepp.weight = 25;
console.log(JonnyDepp);

delete JonnyDepp.age;
typeof JonnyDepp;

const ifJonnyHas = "age" in JonnyDepp;
console.log(ifJonnyHas);

console.log(Object.hasOwn(JonnyDepp, "weight"));

//TODO   работа с объектами
// получ списка ключей
const keysForJonny = Object.keys(JonnyDepp);
console.log(keysForJonny);

// получ списка значений
const valuesForJonny = Object.values(JonnyDepp);
console.log(valuesForJonny);

// в виде массива получить все фильмы
function allFilms(JonnyDepp) {}
const filmsForJonny = Object.values(JonnyDepp.films, JonnyDepp.films).flat();
console.log(filmsForJonny);

// 2. ????????????????
// const allFilms = [];
// filmsForJonny.forEach((filmsOfYear) => {
//   allFilms.push(...filmsOfYear);
// });

console.log(allFilms);

// получение списка ключ: значение Entries
console.log(Object.entries(JonnyDepp));
