// ES6 fat arrow functuon

// var number=() => {
//     return 10;
// }
let number = (a, b) => {
    return a + b;
}

console.log(number(10,5));

// Object
var js = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],

    //Function Property
    printLibraries: function () {
        this.libraries.forEach(function (a) {
            console.log(`${this.name} loves ${a}`)
        })
    }
};

js.printLibraries();