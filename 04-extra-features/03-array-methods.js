let str = '1, 2, 3, 4, 5, 6, 7, 8'

let array = str.split(', ') // ["1", "2", "3", "4", "5", "6", "7", "8"]

// console.log(array.join(';'))    // 1;2;3;4;5;6;7;8
// console.log(array.reverse())    // ["8", "7", "6", "5", "4", "3", "2", "1"]

// delete elements start: 1 count 3
console.log(array.splice(1, 3))  // ["2", "3", "4"]

// add an element '11' also delete first element
array.splice(0, 1, '11')    // ["11", "5", "6", "7", "8"]

// add elements '12', '23' without delete first element
array.splice(1, 0, '12', '23')      // ["11", "12", "23", "5", "6", "7", "8"]


// join two  'array' and [1, 2]
let newArray = array.concat([1, 2]) // ["11", "12", "23", "5", "6", "7", "8", 1, 2]

// console.log(newArray)

let objArr = [
    {name: 'Shamil', age: 22},
    {name: 'Ivan', age: 18},
    {name: 'Ali', age: 27}
]

let foundPerson = objArr.find(person => person.age === 27 )

console.log(foundPerson)  // {name: "Ali", age: 27}

let oddArray = [1, 2, 3, 4, 6, 7, 8].filter(item => item % 2 !== 0)     // [1, 3, 7]


console.log(array)  // ["11", "12", "23", "5", "6", "7", "8"]

// we can use parseInt(item) / Number(item) / item * 1
let numArr = array.map(item => parseInt(item))  // [11, 12, 23, 5, 6, 7, 8]

let numArr2 = array.map(item => item*2)  // [22, 24, 46, 10, 12, 14, 16]

console.log(numArr2)
