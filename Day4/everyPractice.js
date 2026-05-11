//Every() Practice
const numbers = [2,4,6];
const result = numbers.every(n => n %2 === 0);
console.log(result);

//Real App Exapmle
const users = [
    {name:"Ram", active:true},
    {name:"Hari", active:true}
];
const allActive = users.every(users => users.active);
console.log(allActive);