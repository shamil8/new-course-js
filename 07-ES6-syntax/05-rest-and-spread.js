const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const title = form.title.value
    const text = form.text.value

    saveForm({title, text})
})

// it's Spread
// function saveForm(data) {
//     // const {title, text} = data
//
//     const formData = {
//         date: new Date().toLocaleString(),
//         ...data   // we deployed (create newb) the elements of this object
//     }
//
//     console.log('Form data:', formData)
// }

// it's Rest
function saveForm(...args) {
    const [title, text] = args

    // console.log('Args', args)

    const formData = {
        date: new Date().toLocaleString(),
        title, text
    }

    console.log('Form data:', formData)
}
