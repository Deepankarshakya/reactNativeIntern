// Task 1
function total() {
    const number = [5, 10, 15, 20];
    const sum = number.reduce((acc, add) => {
        return acc + add;
    }, 0);
    return console.log(sum);
}
total();

//Task 2
const cart = [
    { item: "Phone", price: 1000 },
    { item: "Laptop", price: 2000 },
    { item: "Tablet", price: 500 }
];
function totalsum() {
    const total = cart.reduce((acc, add) => {
        return acc + add.price;
    }, 0);
    return total;
}
console.log(totalsum());

// Task 3
const user = {
    name: "Deepankar",
    age: 24,
    city: "Kathmandu"
};

const { name, age, city } = user;
console.log(name);
console.log(city);

//Task 4 and 5
const numbertask4 = [10, 20, 30];
function add() {
    const addition = {
        ...numbertask4,
        active: true,
        3: 40
    }
    return (addition);
}
console.log(add());

//Bonus Task
const users = [
    { name: "Ram", salary: 1000 },
    { name: "Hari", salary: 2000 }
];

function increase(){
    const incresement = users.map(n =>{
        return {
            ...n,
            salary : n.salary + 500
        }
    });
    return incresement;
}
console.log(increase());