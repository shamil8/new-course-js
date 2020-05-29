let carYear = 2018
let personYear = 1990

function calcAge(year) {
    let currentYear = 2020

    return currentYear - year
}

function checkAge(year) {
    if(calcAge(year) < 10) {
        console.log('Возраст меньше 10 лет')
    } else {
        console.log('Возраст больше 10 лет')
    }
}

checkAge(carYear)
checkAge(personYear)

// lesson 11.2
function checkAndLogAge(year, name, compareTo = 10) {
    if(calcAge(year) < compareTo) {
        console.log('Возраст '+ name +' меньше ' +  compareTo + ' лет')
    } else {
        console.log('Возраст '+ name +' больше ' +  compareTo + ' лет')
    }
}

checkAndLogAge(carYear, 'Ford')
checkAndLogAge(personYear, 'Person', 20)
