const createPerson = (name, surname) => ({name, surname})

const shamil = createPerson('Shamil', 'Kurbonov' )

const yearBirth = 'year'

console.log(shamil)

const ivan = {
    name: 'Ivan',
    ['surname']: 'Ivanov',
    [yearBirth]: 1998,

    logFields() {
        const {name, surname, year} = this
        console.log(name, surname, year)    // Ivan Ivanov 1998
    }
}

console.log(ivan)

ivan.logFields()

const {year} = ivan

console.log(year) // 1998
