//1) Напишите функцию для извлечения чисел - это функция которая принимает строку и
// возвращает массив всех чисел в строке
//Пример:

const regExp = /[1-9]/
function extractNumbers(str) {
    return  regExp
}
extractNumbers("a1fg5hj6") // вернёт [1, 5, 6]

//2) Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи с задержкой
// в одну секунду (ограничение число 144)

let number = 0
setInterval(() => {
    number++
    if(number === 144){
        clearInterval(setInterval())
    }

},1000)

// 3) Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль

const url = 'https://fakestoreapi.com/products'
const getData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.title)
    } catch (e) {
        console.log('not')
    }

}
getData()

// 4) Создайте 5 кнопок внутри которого будут названия цветов на английском
// При помощи делегирования событий сделайте так чтобы при нажатии на какую
// либо из кнопок менялся цвет заднего фона body на цвет нажатой кнопки

const color = document.querySelector('.color')

color.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button'){
        if (event.target.classList.contains('red')){
            event.target.classList.remove('red')
        }
        if (event.target.classList.contains('green')){
            event.target.classList.remove('green')
        }
        if (event.target.classList.contains('yellow')){
            event.target.classList.remove('yellow')
        }
        if (event.target.classList.contains('blue')){
            event.target.classList.remove('blue')
        }
        if (event.target.classList.contains('purple')){
            event.target.classList.remove('purple')
        }

    }
}


// 5) Создайте кнопку которая будет отображать блок либо скрывать его
// Надо сделать блок просто квадратным, а рядом кнопка , если нажать на
// неё то блок скроется, если снова нажать на ту же кнопку то блок снова покажется

const block = document.querySelector('.block')
const hideBlock = document.querySelector('.hideBlock')

hideBlock.onclick = () => {
    block.style.display = 'none'
}

// 6) Отобразите на странице цифру ноль и начните его увеличивать на +1
// каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100

setInterval(() => {
    let count = 0
    count++
    if (count === 100){
        clearInterval(setInterval())
    }
    console.log(count)
},10)

// 7) Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON
// и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение)
// используйте async await

const getTitle = async () => {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data.title)
    } catch (e) {
        console.log('not')
    }

}
getTitle()