// singleton                  

// Object.create
// object literals
const jsUser = {
    name: "Ayush",
    age: 18,
    location: "Chapra",
    email: "singhayushkumar5555@gmail.com",
    isLoggedIn: false ,
    lastLoginDays: ["Monday" , "Saturday"]

}

console.log(jsUser.email)          //output; singhayushkumar5555@gmail.com
console.log(jsUser["email"])        //output; singhayushkumar5555@gmail.com 
console.log(jsUser.lastLoginDays)   //output; [ 'Monday', 'Saturday' ]
