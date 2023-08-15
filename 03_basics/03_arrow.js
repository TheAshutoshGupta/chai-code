const user={
    userName:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`)
        console.log(this);
    }
}
/*
user.welcomeMessage()
user.userName="ashutosh"
user.welcomeMessage() 
*/
//user.welcomeMessage(this)

console.log(this)
/* in node this refers to nothing but in on console
this keyword refers to 
*/
/* function chai()
{
    console.log(this);
}
chai()
 */

/* const chai = () =>{
    let username="hitesh"
    console.log(this)
} */

const AddTwo=(num1,num2)=>{
    return num1+num2
}

console.log(AddTwo(3,4))

/* if there is a new single line return of the function then we can remove curly paranthesis
and return keyword eg.
*/

const AddTwoo=(num1,num2)=>(num1+num2)>100?num1+num2:-1
console.log(AddTwoo(5,6))

/* what if we wanted to return an Object */
const temp=(name,age) => ({username:"ashutosh",age:18})

console.log(temp("ashutosh","18"))