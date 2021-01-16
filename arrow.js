const learn = () => {
    console.log('Hello');
    return "Hello" +num;
}

const test = () => {
    console.log("Test");
}

// spread operator

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);


// rest operator

// const learn = (...args) => {
//     console.log(args);
// }
// learn(1, 2, 3, 4);


// distructuring

const course = {
    name: 'React Crash Course',
    details: {
        // price: '200tk',
        duration: '2 hourse'
    }
};
const test = course;
const { details: { price } ={} } = course;
console.log(price);