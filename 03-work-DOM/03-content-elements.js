/**
 * class -> .CLASS_NAME
 * id    -> #ID
 *
 */

let div = document.querySelector('#playground')
let p = document.querySelectorAll('.text')  // return collection
let h1 = document.querySelector('h1')
let ul = document.querySelector('div#playground > ul') // child Elements!
let ul2 = document.querySelector('div#playground > div > ul') // child div Elements!
let input = document.querySelector('input')

console.log(input.value)
h1.innerHTML = "<h2 style='color: red;'>Front JavaScript</h2>"
div.textContent = "Change from JS"
console.log(div.innerHTML) // string element html
console.log(p)
console.log(h1.textContent)
console.log(ul)
console.log(ul2)


