// CallBack Function Example 1
function greet(name){
    return "Hello " + name;
}

function processUser(callback){
    console.log(callback("Deepankar"));
}
processUser(greet);

//CallBack Function Example 2
function calculator(a,b,operator){
    return operator(a,b);
}
function add(x,y){
    return x + y;
}
console.log(calculator(5,5,add));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('What is your name : ', (name) => {
    console.log(`Hello ${name}!`);
    readline.close();
});