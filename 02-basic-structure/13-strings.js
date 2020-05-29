let str1 = 'Hello world'
let str2 = 'Hello world 2'

let personName = 'Виктор'

let message = 'Человека зовут "' + personName + '"'
let message2 = "Человека зовут  \"" + personName + "'"
let message3 = 'Человека зовут \\ \'' + personName + '\''

console.log(str2)
console.log(message)
console.log(message2)
console.log(message3)

let newMessage = 'Hello world!!!'

console.log(newMessage.length) // 14
console.log(newMessage.toUpperCase()) // HELLO WORLD!!!
console.log(newMessage.toLowerCase()) // hello world!!!
console.log(newMessage.charAt(1)) // e
console.log(newMessage.indexOf('world')) // 6
console.log(newMessage.indexOf('afdsafasd')) // -1
console.log(newMessage.substr(1,4,)) // ello
console.log(newMessage.substring(1, 4)) // ell
console.log(newMessage.substr(newMessage.indexOf('world'), 'world'.length)) // 6
