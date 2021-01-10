// implicit binding
// explicit binding
// new binding
// window binding

// var printPlayerName = function (name) {
//     console.log(name);
// }
// printPlayerName('Sakib');


// implicit binding
var sakib = {
    name: 'Sakib',
    age: 35,

    printPlayerName : function () {
    console.log(this.name);
}
}
sakib.printPlayerName();



var printPlayerNameFunction = function (obj) {
    obj.printPlayerNameFunction = function () {
        console.log(this.name)
    }
}

var sakib = {
    name: 'sakib',
    age: 35,
};

var tamim = {
    name: 'tamim',
    age: 35,
}

printPlayerNameFunction(sakib)
printPlayerNameFunction(tamim)

sakib.printPlayerNameFunction();
tamim.printPlayerNameFunction();


var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: 'Mr.XXX',
            printName: function () {
                console.log(this.name)
            },
        }
    };
};
var sakib = Person('Sakib al Hasan', 35);
sakib.printName();
sakib.father.printName()



// explicit binding

var printName = function (v1,v2,v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`)
};
    
var sakib = {
    name: 'Sakib',
    age: 35,
    
};

var v1 = 'HandSome';
var v2 = 'All-Rounder';
var v3 = 'Best Player';
var v = [v1,v2,v3]

printName.call(sakib, v1, v2, v3);
printName.apply(sakib, v);
var newFunc = printName.bind(sakib, v1, v2, v3);
newFunc();



// new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person('Sakib', 35);


// window binding

// "use strict";
var PrintName = function () {
    console.log(window === this)
    console.log(this.name);

};
var sakib = {
    name: 'sakib',

};

// PrintName.call(sakib);
PrintName();