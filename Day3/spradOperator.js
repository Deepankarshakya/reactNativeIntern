// SpreadOperator in JavaScript is '...'
const number = [1,2,3];
const newNumber = [...number, 4];
console.log(newNumber);

//Object
const user = {
    name : "Ram",
    age : 22
};
const updateUsers = {
    ...user,
    active: true
}
console.log(updateUsers);