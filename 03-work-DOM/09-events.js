// let p = document.querySelectorAll('p')

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', event => {
//         event.target.style.color = 'blue'
//     })
// }

document.getElementById('wrapper').addEventListener('click', event => {
    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p') {
        event.target.style.color = 'blue'
    }

    if (event.target.classList.contains('color')) {
        event.target.style.color = 'red'
    }
})
