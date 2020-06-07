let person = {
    name: 'Shamil',
    age: 28,
    job: 'Frontend',
    displayInfo(ms) {

        setTimeout(function() {
            // debugger
            console.log('Name', this.name)
            console.log('Age', this.age)
            console.log('Job', this.age)
        }.bind(this), ms)

    }
}

person.displayInfo(500)
