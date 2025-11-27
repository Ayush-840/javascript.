const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);  //output; [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][0])   //output; superman
console.log(marvel_heros[3][1])    ///outpput; flash
console.log(marvel_heros[3])     // [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[2])    //output; spiderman

marvel_heros.concat(dc_heros)
console.log(marvel_heros);     // output; [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// note:-  concat function ka use array ko add krne ke liye krte hai dono array ko addingg...

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);    // output; [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = another_array.flat()
console.log(real_array)    //output; [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
//note:- flat function ka kaam apreadout krna hota hai nested array ko

 console.log(Array.isArray("Ayush"))  // output; false , because ye ek string hai orr iska datatype boolean hai
 
 console.log(Array.from("Ayush"))     //output; [ 'A', 'y', 'u', 's', 'h' ]
  // note:- from func string form mei convert kr deta 

  console.log(Array.from({name: "Ayush"}))   //output; []
     //note iska output empty array hoga qki iss case mei system ye sochne lgat hai ki string key ka bnauu ya values ka
     // intresting



let score1 = 100 
let score2 = 300
let score3 = 200
console.log(Array.of(score1,score2,score3))     //output; [ 100, 300, 200 ]
// note:- Array.of func ka use hmm variables ko array mei krne ke liye krte hai