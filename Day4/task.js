// Task 1
const marks = [80,90,70,60];
const passcheck = marks.every(n => n>=50);
console.log(passcheck);

//Task 2
const users = [
  {name:"Ram", active:true},
  {name:"Hari", active:true},
  {name:"Shyam", active:false}   
];
const activeall = users.every(n => n.active);
console.log(activeall);

// Task 3
const user = [
  {name:"Ram", age:22},
  {name:"Hari", age:15},
  {name:"Shyam", age:30}    
];
const agecheck = user.some(n => n.age<18);
console.log(agecheck);

//Task 4
const products = [
  {name:"Phone", stock:10},
  {name:"Laptop", stock:0},
  {name:"Tablet", stock:5}    
];
const outofstock = products.some(n => n.stock === 0);
console.log(outofstock);

//Task 5
const product = [
  {name:"Phone"},
  {name:"Laptop"},
  {name:"Tablet"}   
];
const positon = product.findIndex(n => n.name === "Tablet");
console.log(positon);

//Task 6
const userss = [
  {id:1, name:"Ram"},
  {id:2, name:"Hari"},
  {id:3, name:"Shyam"}    
];
const idfind = userss.findIndex(n => n.id === 2);
console.log(idfind);

// Bonus Task
const userses = [
  {name:"Ram", active:true},
  {name:"Hari", active:false},
  {name:"Shyam", active:true}    
];
const allactive = userses.every(n => n.active);
console.log("All Active : " + allactive);
const atleaseone = userses.some(n => n.active);
console.log("At least one active : " + atleaseone);