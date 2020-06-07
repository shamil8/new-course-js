/**
 * Правила хорошего тона если мы создаем переменные,
 * через ключивое слово 'const' и стараемся меньше использовать 'let'
 * просто потому-что мы даем разработчикам понять что в последствии данная переменная
 * не может менять свою тип как минимум и в некоторых случаях и значения
 * и это облегчит читабельность кода.
 */

// let color = 'red'
//
// color = {color: 'pink'}
//
// console.log(color)

// for(var i = 0; i < 5; i++) {    // (5) 5
//     setTimeout(function () {
//         console.log(i)
//     }, 2000)
// }

for(let i = 0; i < 5; i++) {    // 0 1 2 3 4
    setTimeout(function () {
        console.log(i)
    },2)
}

const HEX = '#ffcc33' // we can't change it

document.querySelector('h1').style.color = HEX

const array = [1, 2]  // we can add/del elements

const obj = {a: 1}

array.unshift(4)

console.log(array)
console.log(obj)
