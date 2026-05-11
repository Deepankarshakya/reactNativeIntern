const users = [
  {name:"Ram", age:22},
  {name:"Hari", age:25},
  {name:"Shyam", age:16}   
];
const under18 = users.some(n => n.age < 18);
console.log(under18);