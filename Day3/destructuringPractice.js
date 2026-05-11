// Before Destructuring
const user = {
    name : "Ram",
    age: 22
};

console.log(user.name);
console.log(user.age);

// After Destructuring
const {name, age} = user;
console.log(name);
console.log(age);