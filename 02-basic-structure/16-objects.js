let person = {
    name: 'Shamil',
    age: 22,
    birthYear: 2000,
    family: ['Ali', 'Komron'],
    car: {
        year: 2010,
        color: 'black',
        model: 'BMW'
    },
    calculateAge: function () {
        let age = 2020 - this.birthYear // person.birthYear = this.birthYear
        console.log('Возраст', age)
    },
    calcAge: () => this.age = 2020 - this.birthYear
}
console.log(person)
console.log(person.name)
console.log(person['birthYear'])

let field = 'car'
console.log(person[field].year)

person.birthYear = 1998

console.log(person)

person.calculateAge() // 'Возраст 22'

person.calcAge() // it called calcAge then we have person.age!
console.log(person.age) // 22
