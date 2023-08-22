/* Array.reduce() */
/* syntax
    const intialValue=0;
    const sumWithInitial=array.reduce( (accumulator, currentValue)=>accumulator+currentValue,initialValue)
*/

const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currentValue){
    console.log(`acc:${acc} and cur: ${currentValue}`)
    return acc+currentValue},0 /* initial value */)
console.log(myTotal)

/* output
    acc:0 and cur: 1
    acc:1 and cur: 2
    acc:3 and cur: 3
    6
*/

/* can we implement it with arrow function */
const myTotal2=myNums.reduce((acc,curr)=>{return acc+curr},0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cart=shoppingCart.reduce((acc,items)=>(acc+items.price),0)
console.log(cart)

