const score = 400
console.log(score)   //output; 400

const balance = new Number(100)
console.log(balance);     // output; [Number: 100]

console.log(balance.toString())    // output; 100

console.log(balance.toString().length);    // output; 3

console.log(balance.toFixed(1));      // output; 100.0
console.log(balance.toFixed(2));      // ouput; 100.00
console.log(balance.toFixed(3));      // output; 100.000


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))    // output; 123
console.log(otherNumber.toPrecision(4))     // output; 123.9
console.log(otherNumber.toPrecision(5))      // output; 123.90



const hundreds = 1000000
console.log(hundreds.toLocaleString())    //output; 10,00,000
console.log(hundreds)    // output; 1000000


// +++++++++++++++++++++++++ MAaths +++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4.9))    //output; 4.9
console.log(Math.round(4.6))    //output; 5



console.log(Math.ceil(4.2))     // output; 5
console.log(Math.ceil(4.7))    // output; 5

console.log(Math.floor(4.9))    //output; 4


console.log(Math.min(7,8,5,3,2,4))   // output; 2
console.log(Math.max(7,8,5,3,2,4))   // output; 8



console.log(Math.random());    // 0.9587246212484204
console.log(Math.random()*(10) + 1);    //7.535640124307401
console.log(Math.floor(Math.random()*10)+1);    //3

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min)   // 10


