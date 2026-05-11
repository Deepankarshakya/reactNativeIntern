// Practice using reduce to sum an array of numbers. Reduce converts any number, string, or object into single value.
const numbers = [1, 2, -3, 4, 5];
const total = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);

let array = [10, 20, 30];
const fullTotal = array.reduce((acc, num) =>{
    return acc + num;
},0)
console.log(fullTotal);


// Real App Example
const cart = [
    {items: "Phone", price: 1000},
    {items: "Laptop", price: 150000},
    {items: "Speaker", price: 10000}
];
const totalamt = cart.reduce((acc, mod) => {
    return acc + mod.price;
},0);
console.log(totalamt);