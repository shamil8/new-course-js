/**
 0 null undefined '' NaN => false !!!
 */
let str = 'Hello'

// if (str) {
//     console.log('Значение true')
// } else {
//     console.log('Значение false')
// }

null
    ? console.log('Значение true')
    : console.log('Значение false')

let personAge = 20

let message

if (personAge < 18) {   // it's bad
    message = ' Человек не совершеннолетний'
} else {
    message = ' Человек совершеннолетний'
}

console.log(message)

message = personAge < 18    // it's good
    ? ' Человек не совершеннолетний'
    : ' Человек совершеннолетний'

console.log(message)

// it isn't very bad but I like it :)
message = 'Человек' + (personAge < 18 ? ' не ' : ' ') + 'совершеннолетний'

console.log(message)
