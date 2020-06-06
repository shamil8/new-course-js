let shamil = Object.create({
    calculateRatingEveryYear() {
        Object.defineProperty(this, 'ratingEveryYear', {
            value: Math.ceil(this.rating / this.year),
            enumerable: false, // if this object NOT hasOwnProperty we can call it
            writable: false,
            configurable: false
        })
    }
},{
    name: {
        value: 'Shamil',
        enumerable: true,
        writable: false
    },
    dream: {
        value: 'Car',
        enumerable: true,   // We want to see this object if we'll call it (but if this object NOT hasOwnProperty we can call it)
        writable: false,    // We can't to change this field
        configurable: false // We don't want to delete this field (if they called)
    },
    year: {
        value: 1998,
        enumerable: true,
        writable: false,
        configurable: false
    },
    rating: {
        value: 9885,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get() {
            console.log('Get age')
            return new Date().getFullYear() - this.year
        },
        set(v) {
            console.log('Set value')
        }
    }
})
// property descriptor
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor

console.log(shamil)

shamil.calculateRatingEveryYear()  // if we want to see it in property

for(let key in shamil) {
    if (shamil.hasOwnProperty(key)) { // without property [calculateRatingEveryYear]
        console.log(key, shamil[key])
    }
}
