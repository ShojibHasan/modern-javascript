numbers = [1, 2, 3, 4, 5, 6];

const filter = numbers.filter((num) => num > 2);

console.log(filter);

const find = numbers.find((num) => num > 2);
console.log(find);

const findIndex = numbers.findIndex((num) => num > 2);
console.log(findIndex);

const slice = numbers.slice(2, 5);
console.log(slice)

const concat = numbers.concat(6, 7, 8);
console.log(concat);

console.log(numbers);


const splice = numbers.splice(1, 2, 7, 9);

console.log(splice)

console.log(numbers);

const push = numbers.push(6, 7, 8)
console.log(push);

// map
const newNumbers = numbers.map((num) => {
    return num * 2;
});
console.log(newNumbers);