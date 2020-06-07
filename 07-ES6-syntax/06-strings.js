const createLink = ({path, name}) => '<a target="_blank" href="'+path+'">'+name+'</a>'

const ul = document.querySelector('ul')

const google = '<li>'+createLink({path: 'https://www.google.com/', name: 'Google'})+'</li>'

const yandex = '<li>'+createLink({path: 'https://www.ya.ru/', name: 'Yandex'})+'</li>'

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

const strToLog = `
 Hella
 World
   I am
     New tab
`

console.log(strToLog)
