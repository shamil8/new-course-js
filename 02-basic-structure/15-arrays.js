let cars = ['Ford', 'Mazda', 'BMW']
console.log(cars) //  ["Ford", "Mazda", "BMW"]
console.log(cars[1]) // Mazda

console.log(cars.length) // 3

cars.push('Audi')
console.log(cars)  // ["Ford", "Mazda", "BMW", "Audi"]

// cars.pop('Audi')
// console.log(cars)  // ["Ford", "Mazda", "BMW"]'

// pop() - delete and return a last element
let audi = cars.pop()
console.log(audi)  // 'Audi'

// shift() - delete and return fist element
let ford = cars.shift()
console.log(ford)  // 'Ford'

// unshift() - add in begin and return a length array
let retford = cars.unshift('Ford')
console.log(retford)  // 3
console.log(cars)  // ["Ford", "Mazda", "BMW"]

console.log(cars.indexOf('kia'))  // -1
console.log(cars.indexOf('Mazda'))  // 1

let index = cars.indexOf('BMW')
let bmw = cars[index]
console.log(bmw) // 'BMW'
