let createCounter = counterName => {
    let counter = 0

    return {
        increment() {
            counter++
        },
        decrement() {
            counter--
        },
        getCounter() {
            return counter
        }
    }
}

let counterA = createCounter('Counter A')
let counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()
counterB.decrement()
