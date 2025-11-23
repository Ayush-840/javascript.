// primitive
// there are 7 primitive data-types
// 7 tpes : String, Number, Boolean , null, undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);      // false
console.log(typeof id)          // Symbol
console.log(typeof anotherId)    // Symbol


// Reference (non premitive) 
//  Array , objects , functions,
// most vvi array and object for mastery in js



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack (primitive), 
// Heap(non-premitive)

let myname="ayush"
let anothername = myname
console.log(anothername)   //output; ayush



let mynamee="ayush"
let anothernamee = "singh"
console.log(mynamee)        // output; ayush
console.log(anothernamee)     // output; singh

let userOne = {
   email: "singhayushkumar5555@gmail.com",
   upi: "user@3131"
}

let userTwo = userOne 

userTwo.email = "studentuse33@gmail.com"

console.log(userOne.email);    // output; studentuse33@gmail.com
console.log(userTwo.email);     // output; studentuse33@gmail.com

