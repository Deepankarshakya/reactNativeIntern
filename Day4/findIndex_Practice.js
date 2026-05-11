const porducts = [
  {name:"Phone"},
  {name:"Tablet"},
  {name:"Laptop"}    
];
const position = porducts.findIndex(product => product.name === "Laptop");
console.log(position);