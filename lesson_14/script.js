const headerElement = document.querySelector(".header");

headerElement.innerText = "Калькулятор";
console.log(headerElement);

headerElement.classList.add("red");

//  console.log(inputElements[0]);
//  inputElements[0].value

//* создание элемента
const submitButtonElement = document.createElement("button");

headerElement.after(submitButtonElement);
submitButtonElement.innerText = "Результат";
//* добавляем созданный элемент в определенное место
headerElement.classList.add("submit-button");

// созд ф на клик по кнопке
const submitButtonHandler = () => {
  const inputElements = document.querySelectorAll("input");

  const el1 = inputElements[0].value;
  const el2 = inputElements[1].value;
  // parse / Number() /+
  const summ = +el1 + +el2;
  console.log(summ);
};

// добавляем на кнопку действие
submitButtonElement.addEventListener("click", submitButtonHandler);

//
const resultElement = document.createElement("span");
resultElement.classList.add('result')
resultElement.innerText = summ;
//
const bodyEl = document.querySelector("body");
bodyEl.append(resultElement);
