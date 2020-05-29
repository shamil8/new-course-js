sayHelloTo('Алена') // success

function sayHelloTo(name) {
    console.log('Привет, ' + name)
}
sayHelloTo('Елена')

// sayHello('Иван') // error

let sayHello = function (name) {
    console.log('Привет, ' + name)
}

sayHello('Игорь')
