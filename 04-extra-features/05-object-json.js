console.log('--------- Lesson 5. Object JSON ---------')

let person = {
    name: 'Shamil',
    age: 22,
    car: {
        model: 'Ford'
    },
    job: 'Front-end',
    friends: ['Ali', 'Komron']
}

let str1 = JSON.stringify(person)

console.log(str1)
/**
 * {"name":"Shamil","age":22,"car":{"model":"Ford"},
 * "job":"Front-end","friends":["Ali","Komron"]}
 */

console.log(JSON.parse(str1))
/**
 *  {name: "Shamil", age: 22, car: {…},
 *  job: "Front-end", friends: Array(2)}
 */

