let a = document.querySelector('a')
let oldHref = a.getAttribute('href')
// console.log( a.attributes.href )  // https://google.com

a.textContent = 'Adab'
a.setAttribute('href', 'https://adab.ga')
a.setAttribute('title', 'It\'s Adab')
console.log(a.attributes.href)

// lesson 5

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.add('blue')
box2.classList.remove('blue')

let hasClass = box2.classList.contains('blue')
let hasClassBox = box2.classList.contains('box')
console.log(hasClass)   // false
console.log(hasClassBox) // true

if (hasClass) {
    box2.classList.remove('blue')

} else {
    box2.classList.add('blue')
}
