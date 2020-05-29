let divs = document.querySelectorAll('div')
let link = document.querySelector('a')

// for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function() {   // event one then two
//         console.log(this.getAttribute('id'))
//     }, true )
// }

divs.forEach(div =>                     // normal event
    div.addEventListener('click', (event) => {
        event.stopPropagation()     //Stop event one
        console.log(div.getAttribute('id'))
    }, false)
)

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault()

    let div = divs[0]

    // if (div.style.display === 'none') {
    //     div.style.display = 'flex'
    // } else {
    //     div.style.display = 'none'
    // }

    div.style.display = div.style.display === 'none'
        ? 'flex'
        : 'none'

    console.log(div.style.display)
}
