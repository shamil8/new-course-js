let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHandler() {
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', () => {
    h1.style.color = 'red'
    h1.style.backgroundColor = 'black'
    h1.style.borderRadius = '15px'
})
h1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'  // прозрачность
})

button.addEventListener('click', buttonHandler)
