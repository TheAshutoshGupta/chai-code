//start from the date 1 january, 1970

// dates
let myDate = new Date()
// console.log(myDate.toString());//toString is a method
// console.log(myDate.toISOString())  
// console.log(myDate.toJSON())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

let mySecondDate= new Date("2023-01-14")
// console.log(mySecondDate.toLocaleString())

// let mytimeStamp = Date.now()
// console.log(myCreatedDate.getTime())//prints miliseconds from 1 jan 1970
// console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate.getDay());
// using these "get" funcitons we can print the complex data by writing `this is ${myDate.getMonth()} and the date is ${myDate.getDate()}`

newDate.toLocaleString('default',{
    weekday: "long"
})