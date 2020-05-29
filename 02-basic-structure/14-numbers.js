console.log(42)
console.log(-42)
console.log(1.5)
console.log(1/3) // 0.333333333
console.log(0xAB) // из 16 в 10
console.log(2e3) // 2 *10^3
console.log(NaN) // Not a number!
console.log(typeof NaN) // number
console.log(123 / 0) // Infinity (бесконечность)

let fortyFour = 44
let delta = 8 / 3
console.log(fortyFour.toString()) // '44'
console.log(delta.toFixed(3)) // '2.667'
console.log( + delta.toFixed(3)) // 2.667
console.log( delta.toFixed(3) + 4) // 2.6674
console.log( + delta.toFixed(3) + 4) // 6.667 !

console.log(parseFloat(delta.toFixed(2))) // 2.67 [ parseFloat(delta) = + delta ]
console.log(parseInt(delta.toFixed(2))) // 2

console.log(isNaN(NaN)) // true !
console.log(isNaN(343)) // false
console.log(isNaN('343')) // false
console.log(isNaN('3gfg43')) // true

console.log(isFinite(1 / 0)) // false
console.log(isFinite(9999999999999)) // true
