const accountId = 91422
let acocuntEmail= "singhayushkumar5555@gmail.com"
var accountPassword = "12345"
accountCity= "Patna"

// accountId = 2     not allowed because const dont changes anything
acocuntEmail = "dsacha@njw"
accountPassword="133131"
accountCity="chapra"
console.log(accountId);
// output; 91422 not change beacuse assing in const


console.log(acocuntEmail);
// output; sacha@njw

console.table([accountId,accountPassword,accountCity,acocuntEmail]);
// output ;┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 91422        │
// │ 1       │ '133131'     │
// │ 2       │ 'chapra'     │
// │ 3       │ 'dsacha@njw' │
// └─────────┴──────────────┘

// const never edited 
// console.table is use for printing multiples variables

let accountState;
console.log(accountState); 
// output; undefined
// in this case output will be undefined 
// because when only variable declear means having no any value then 
 

