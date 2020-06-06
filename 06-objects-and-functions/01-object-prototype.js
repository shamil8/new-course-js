/**
 *  number, string, boolean, null, undefined
 *  object
 */

let car = {
    name: 'BMW',
    year: 2019,
    person: {
        name: 'Shamil'
    }
}

console.log(car)
/**
 *
 * {name: "BMW", year: 2019}name: "BMW"year: 2019__proto__: Object
 * car.name // "BMW"
 * car['year']  // 2019
 * car.hasOwnProperty('name') // true
 *
 * car.__proto__ === Object.prototype  // true
 */
// car.__proto__ => Object.prototype
// [] => Array => Object
