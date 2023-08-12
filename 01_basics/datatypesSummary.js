//primitive datatypes 
/*
    all are call by value, doesnt gives original reference but gives the copy of it, the changes we do, gets changed into copy 
*/



// 7 types: String, Number, Boolean, null. undefined, Symbol, BigInt



//non primitive datatype, reference dataTypes
/* WE GET THE DIRECT REFENCE OF THE VARIABLES */
// types: Arrays, Objects, Functions
//

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=32434235123533253n
console.log(bigNumber)



const heros = ["shaktiman","naagraj","doga"]; //arrays
let myObj={
    name:"hitesh",
    age:18,
}

const myfunction=function(){
    console.log("hello world")
}

console.log(typeof myObj)