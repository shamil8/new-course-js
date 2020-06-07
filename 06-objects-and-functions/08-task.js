/**
 * Реализуйте возможность используя прототип, чтобы у каждого массива был новый метод,
 * позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, чтобы:
 1. Для чисел это возведение в квадрат
 2. Для строк это удваивание строки

 Пример:
 [1, 2, 3] => [1, 4, 9]
 [5, 'Hello', 6] => [25, 'HelloHello', 36]
 */
let arr1 = [1, 2, 3]
let arr2 = [5, 'Hello', 6]

// Method 1 (bad)
Array.prototype.getSqrtAll = function () {

    for (let key in this) {
        if (typeof this[key] === 'number') {
            this[key] *= this[key]
        } else {
            this[key] += this[key]
        }
    }

    return console.log(this)
}

// Method 2 (good)
Array.prototype.double = function () {
    return this.map( item =>
        typeof item === 'number'
            ? Math.pow(item, 2)
            : item + item
    )
}

let newArr1 = arr1.double()
let newArr2 = arr2.double()

console.log('Arr1', newArr1)
console.log('Arr2', newArr2)
