let numbers = [1, 2, 3, 4, 5, 7, 9]

// numbers.push('Not a number')
// numbers.push('New element')

// i++ => i = 5; 5 < 5 (false)
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log('Элемент '+ numbers[i] +' четаня')
//     } else {
//         console.log('Элемент '+ numbers[i] +' не четаня')
//     }
// }

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue
    }
    console.log('Элемент '+ numbers[i] +' четная')
}
/**
 * Элемент 2 четная
 * Элемент 4 четная
 */

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        break
    }
    console.log('Элемент '+ numbers[i] +' не четная')
} // 'Элемент 1 не четная'

numbers.push('Not a number')

for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'string') {
        continue    // пропускает все строковые
        // break    // yeep, останавливает цикл
    }
    console.log(numbers[i])
} // 'Элемент 1 не четная'
