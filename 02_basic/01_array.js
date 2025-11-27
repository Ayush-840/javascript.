const myArry = [0,1,2,3,4,5]
console.log(myArry[0])    //output; 0
console.log(myArry[1])    //output; 1
console.log(myArry[2])    //output; 2
console.log(myArry[3])    //output; 3
console.log(myArry[4])    //output; 4
console.log(myArry[5])    //output; 5

console.log(myArry[6])    //output; undifeind    ++++++++++++++++++key+++++

const arr = [9,7,4,8,6,3]
const heros = ["Pawan" , "ayush" , "badshah"]
const arry = new Array(1,2,3,4)
console.log(arr + heros)     // output; 9,7,4,8,6,3Pawan,ayush,badshah


/*********/ // Array Method __** //
myArry.push(6)
console.log(myArry)     // output; [0,1,2,3,4,5,6]
// note:- push element ko last index pe add krta hai list mei

myArry.pop()
console.log(myArry)   // output; [0,1,2,3,4,5]
// note:- pop sirf last element ko hi htata hai 

myArry.shift()
console.log(myArry)   //output; [1,2,3,4,5]
//note:- shift function list ke first element ko htata hai 

myArry.unshift(9)
console.log(myArry)     // output; [ 9, 1, 2, 3, 4, 5 ]
// note:- unshift function fisrt means 0 index pe element ko add krta hai 


console.log(myArry.includes(11))   // output; false
// note:- inculde function hmm jo element ko uske parammetermei dete vo uss element ko list mei check krta hai

console.log(myArry)  //ouput; [ 9, 1, 2, 3, 4, 5 ]


console.log(myArry.indexOf(9))  //output ; 0
console.log(myArry.indexOf(1))   //output; 1
//note:- indexOf function hmare elemnt ke index ko btata hai 


console.log(myArry.join())   //output; 9,1,2,3,4,5
// join function hmare array ko string bna deta hai
const newArr = myArry.join()
console.log(newArr)    // output; 9,1,2,3,4,5
console.log(typeof newArr)  // output; string


console.log(myArry)    //output; [ 9, 1, 2, 3, 4, 5 ]
console.log(typeof myArry)   //output; object


console.log("A", myArry);
const myn1 = myArry.slice(1,4)    
console.log(myn1);     //output; A [ 9, 1, 2, 3, 4, 5 ]   [1,2,3]
//note:- slice function mei jo hmare range hote hai vo index ka hota hai ye hmee uss index ke range ka element deta 


console.log("B" , myArry)    //output; B [ 9, 1, 2, 3, 4, 5 ]


const mynk2 = myArry.splice(1,3)
console.log(mynk2);    //output; [1,2,3]

const mynk22 = myArry.splice(1,4)
console.log(mynk22);       //output; [4,5]
console.log("c" , myArry)   // output; [9]






