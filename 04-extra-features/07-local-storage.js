document.querySelector('button').addEventListener('click', event => {
    let input = document.querySelector('input')

    let obj = {
        text: input.value
    }

    // localStorage.setItem('titleText', input.value)    // set always value string!!!
    localStorage.setItem('obj', JSON.stringify(obj))    // set always value string!!!

    input.value  = '' // clear value

})

document.addEventListener('DOMContentLoaded', () => {
    // let text = localStorage.getItem('titleText')
    let obj = {};

    try {
        obj = JSON.parse(localStorage.getItem('obj'))
    } catch (e) {}

    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }
})
