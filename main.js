// const para = document.querySelector('p')
// para.addEventListener('click', updateName)
// function updateName() {
//     let name = prompt('изменить имя')
//     para.textContent = 'Player 1:' + name
// }
// console Start = document
//
// let message
// message = 'Hello'
// alert(message)

//
// let year = prompt('How old are you ?')
// if (year < 3 ){
//     alert('Hello baby')
// }else if (year < 18){
//     alert('Hello bro' )
// }else if (year < 40){
//     alert('hello')
// } else{
//     alert('Ohhhhhh you ctrange')
// }

// let number1 = Number(prompt('Ведите первое число'))
// let operation = prompt('вытерите действия \n+\n-\n*\n/')
// let number2 = Number(prompt('Ведите второе число'))
// const calc = () => {
//     let result
//     (isNaN(number1) || isNaN(number2))?
//         alert('ведите только числа!'):
//         true
//     switch (operation) {
//         case "+" :
//             result = number1 + number2
//                 break
//         case "-" :
//             result = number1 - number2
//                 break
//         case "*" :
//             result = number1 * number2
//                 break
//         case "/" :
//             (number2 === 0)? result= "Ошибка" : result = number1 / number2
//                 break
//         default :
//             alert("Выберите правильное действие")
//     }
//     alert(result)
// }
// calc()





//
// class Cars {
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.price = options.price
//     }
// }
// class Toyota extends Cars {
//     constructor(options) {
//         super(options);
//     }
//     start(){
//         console.log('Машина заведена')
//     }
// }
// const toyota = new Toyota({
//         model: 'Camty 3.5',
//         color: 'White',
//         wheels: '6',
//         price: '30000$'
//     }
// )
// class Tiko extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
// const tiko = new Tiko({
//         model: 'Tiko',
//         color: 'black',
//         wheels: '5',
//         price: '100000$'
//     }
// )
// class Volvo extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
// const volvo = new Volvo({
//         model: 'Truck',
//         color: 'red',
//         wheels: '12',
//         price: '50000$'
//     }
// )
// class Lamborghini extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
// const lamborghini = new Lamborghini({
//         model: 'Truck',
//         color: 'red',
//         wheels: '12',
//         price: '50000$'
//     }
// )
// lamborghini.start()
// volvo.start()
// tiko.start()
// toyota.start()


class Light
{
    constructor(selector) {
        this.$element = document.getElementById(selector)

    }
}
class Circle extends Light
{
    constructor(options) {
        super(options);
        this.$element.style/backgroundColor = options.color
        this.$element.textContent = options.text

    }
}
let color = prompt("выберите цвет светофора ").toLowerCase()
if (color === "красный"){
    const red === new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
} else if (color === "red"){
    const red === new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'














