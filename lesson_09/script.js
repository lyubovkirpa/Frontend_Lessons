console.log('hello, DOM')
console.log(document)
console.dir(document)
// console.dir(document.body)

// console.log(document.getElementsByTagName('h2')[0])

// находим элемент через поиск по тегам и кладем его в переменную
// поскольку тегов может быть много - элементы приходят в массиве (списке элементов) - мы забираем первый по нулевому индексу

// 1. Поиск по тегу
let heading = document.getElementsByTagName('h2')[0]
console.log(heading)

// мы можем перезаписать значение элемента через свойство innerText
// изменить значение
heading.innerText = 'Lesson 09. DOM intro 🏠'

// 2. Поиск по классу
let ul = document.getElementsByClassName('method-list')[0]
console.log(ul[0])

// стили можем поменять через обращение к свойству style
// ul.style.listStyleType = 'none'
ul.className = 'method-list'
console.log(ul)


// 3. Поиск по id
let desc = document.getElementById('desc')

// обратились к свойству color элемента и изменили его цвет
// desc.style.color = 'darkred'

// добавили элементу заранее прописанный класс
desc.className = 'desc'
console.log(desc)

// 4. поиск через универсальный 
let descInfo = document.querySelector('#desc-info')
descInfo.className = 'desc-info'
console.log(descInfo)

// работа с интерактивными элементами 
let btnChangeHeading = document.querySelector('#btn-change-heading')

let btnHideList = document.querySelector('#btn-hide-list')

let btnCreateElement = document.querySelector('#btn-create-element')



// функция слушатель событий принимает в себя два параметра
btnChangeHeading.addEventListener('click', () => {
    heading.style.color = 'red'
    heading.style.fontSize = '40px'
})

btnHideList.addEventListener('click', ()=> {
    ul.classList.toggle('hide')
})

btnCreateElement.addEventListener('click', ()=> {
    // метод создания нового эл с помощью createElement()
    let newElement = document.createElement('p')
    newElement.innerText = 'Всё супер!'
    newElement.className = 'dom-result'
    // добавляем элемент в конец body через метод append()
    document.body.append(newElement)
    // console.log(newElement)

})