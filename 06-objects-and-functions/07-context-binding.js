function printObject(objName) {
    console.log('Print object: ', objName)
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    }
}

let person = {
    name: 'Shamil',
    age: 22,
    job: 'Backend',
    friends: ['Kom', 'Elena'],
}

let car = {
    name: 'BMW',
    model: 'M3',
    year: 2017
}

let printPerson = printObject.bind(person)

printPerson('Person')

printObject.call(car, 'Car')

printObject.apply(person, ['Car'])
