document.querySelector('#alert').addEventListener('click', () => {
    alert('Yeep!')
})

document.querySelector('#confirm').addEventListener('click', () => {
    let decision = confirm('Are you sure that you want to do it?')

    if (decision) {
        alert("Success have changed")
    }
})

document.querySelector('#prompt').addEventListener('click', () => {
    let age = prompt('Add your age: ', 18)

    if (age >= 18) {
        alert('You can go')
    } else {
        alert('You\'r too young')
    }
})


throw new Error('Error')    // Error and stop code

console.log('Console.log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console.error')

