function Person(name, year) {
    this.name = name
    this.year = year
}

Person.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

Person.prototype.gender = 'Man'

let shamil = new Person('Shamil', 1998)
let ivan = new Person('Ivan', 2000)

ivan.gender = 'Woman'  // :)

console.log(shamil)
console.log(ivan)
