let myDate = new Date()

console.log(myDate)     // 2025-11-26T20:03:18.597Z
console.log(myDate.toString());     // output; Wed Nov 26 2025 20:03:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());    // output; 11/26/2025, 8:04:10 PM
console.log(myDate.toDateString());    // output; Wed Nov 26 2025

console.log(typeof myDate)     // output; object


let myCreatedDAte = new Date (2023,0,23);
console.log(myCreatedDAte.toDateString());    //output; Mon Jan 23 2023



let myCreatedDAtee = Date (2023,0,23,5,3);
console.log(myCreatedDAtee.toLocaleString());   // output;Thu Nov 27 2025 02:03:54 GMT+0000 (Coordinated Universal Time) 

let myCreatedDAteee = new Date (2023,0,23,5,3);
console.log(myCreatedDAteee.toLocaleString());   // output; 1/23/2023, 5:03:00 AM

let mydatee = new Date("01-14-2023")
console.log(mydatee.toLocaleString());     // output: 1/14/2023, 12:00:00 AM
console.log(mydatee.getTime())       // output ; 1673654400000 (in mili second)

let myTimeStamp = Date.now()
console.log(myTimeStamp);     // output; 1764210397748
console.log(Date.now());     // output; 1764210455706   (in mili second)
console.log(Math.floor(Date.now()/1000));    //output; 1764210562     (in second)


let newDAte = new Date ()
console.log(newDAte);    //output ; 2025-11-27T02:33:47.286Z
console.log(newDAte.getMonth());   //output; 10
console.log(newDAte.getDay());    // output; 4
console.log(newDAte.getDate());   // output; 27
