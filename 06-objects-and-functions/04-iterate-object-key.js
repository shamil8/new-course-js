let person = {
    name: 'Shamil',
    age: 22,
    job: 'Frontend'
}

// for (let key in person) {  // it isn't very good
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key])
//     }
// }

let keys = Object.keys(person)

console.log(keys) // ["name", "age", "job"]

console.log(Object.values(person)) // ["Shamil", 22, "Frontend"]

// the best method!
Object.keys(person).forEach(key => console.log(person[key])) // Shamil  22  Frontend
