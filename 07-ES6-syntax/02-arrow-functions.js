// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }
//
// // console.log(getAge(1998))
//
// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

const getAge = year => new Date().getFullYear() - year

const logAge = year => console.log(new Date().getFullYear() - year)

logAge(1920)

console.log(getAge(1998))

const person = {
    name: 'Shamil',
    age: 22,
    logNameWithTimeout() {
        setTimeout( () => {
            console.log(this.name)
        }, 1000)
    }
}
