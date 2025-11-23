
//***************** Operations **********************************

let value = 3
let negValue= -value
console.log(negValue);  //output; -3


let str1= "hello"
let str2="Ayush"

let str3= str1 + str2
console.log(str3)     //output; helloAyush

console.log("1" + 2);   //output; 12
console.log(1 + "2");    //output; 12

console.log("1" + 2 + 2);   //output; 122
console.log(1 + 2 + "2");     //output; 32
console.log(1 + "2" + 2);    // output; 122

console.log(true);  // output; true
console.log(+true);  //outpiut; 1
// console.log(true +);    //output; error
console.log(+"");    //output; 0

// DEpply study in mdn topic js/operators/increment 

//__________________________________________//


console.log(2 > 1);  //output; true
console.log(2 >= 1);     //output; true
console.log(2 < 1);      //output; false
console.log(2 == 1);      //output; false
console.log(2 != 1);     //output; true


console.log("2" > 1);   //output; true
console.log("02" > 1);  //output; true
console.log(2 < "1");    //output; false

//________________________*********************//

console.log(null > 0);  //output; false
console.log(null == 0);  //output; false

console.log(null >= 0);  //output; true 

// null is a empty and most imprtant

//**********______________************___________********_ */

console.log(undefined == 0);  //output; false
console.log(undefined > 0);    //output; false
console.log(undefined < 0);     //output; false
console.log(undefined >= 0);     //output; false

//*_____________________________________________________ */


       //**** */  === Operators //
console.log("2"===2);  // false
// === this operator check everything like data-type, numerical value,and everything