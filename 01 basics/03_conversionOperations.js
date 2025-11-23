let score = 33
console.log(typeof score)    //output; number
console.log(typeof (score))   //output; number


let scores = "33jhBDHJ"
let valueInNumber=Number(scores)
console.log(typeof valueInNumber);    //output; number
console.log(valueInNumber);   //output; NaN


let scor = null
let valueInNumbers=Number(scor)
console.log(typeof valueInNumbers);    //output; number
console.log(valueInNumbers);         // output; 0


let scorr = undefined
let valueInNumberr=Number(scorr)
console.log(typeof valueInNumberr);    //output; number
console.log(valueInNumberr);       // output; NaN


let scorrr = true
let valueInNumberrr=Number(scorrr)
console.log(typeof valueInNumberrr);    //output; number
console.log(valueInNumberrr);        // output ; 1

// 33 => 33
// "33abcdd" => NaN
// true => 1
// false => 0


//__________________________________________________//


let isLoggedIn=""
let booleanIsLoggedIn = Boolean(isLoggedIn)   
console.log(typeof booleanIsLoggedIn);   //output; bollean 
console.log(booleanIsLoggedIn);     // output; false

let isLoggedInn="Ayush"
let booleanIsLoggedInn = Boolean(isLoggedInn)  
console.log(booleanIsLoggedInn);     // output; true

// 1 => true ; 0 => false
// "" => false
// "AYush" => true

//_____________________________________________//


let number= 99
let StringNumber = String(number)
console.log(StringNumber)          //output; 99
console.log(typeof StringNumber);      //output; string