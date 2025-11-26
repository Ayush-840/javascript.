const name = "Ayush"
const repoCount = 18

console.log(name + repoCount + " Laddu");     // ouput; Ayush18 Laddu

console.log (`hello my name is ${name } and my repo count ${repoCount}`)     // output; hello my name is Ayush and my repo count 18

const gameName = new String ('Ayushsingh')
console.log(gameName[0]);        // output; A
console.log(gameName[1]);   // output; y
console.log(gameName[2]);   // output ; u

console.log(gameName.length); // output; 10

console.log(gameName.__proto__);   // output; {}


console.log(gameName.toUpperCase());   // output; AYUSHSINGH

console.log(gameName.charAt(2));   // output ; u

console.log(gameName.indexOf('s'));  // output; 3


const newString = gameName.substring(0,4)
console.log(newString)   // output; Ayus