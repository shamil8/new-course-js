// console.log('01-what-is-the-DOM')
// // => document
//
// // lesson 2
// let div = document.getElementById("playground")
// console.log(div)
//
// // call class
// let p = document.getElementsByClassName("text")
// console.log(p)
//
//
// // call element
// let h1 = document.getElementsByTagName("h1")
// console.log(h1)

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

console.log(div)
console.log(p)
console.log(h1)
console.log(ul)
console.log(ul2)
