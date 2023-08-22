/* map prototype */

const myNumers =[1,2,3,4,5,6,7,8]
/* const newNums=myNumers.map((num)=>num+10)
console.log(newNums) */

/* we can also chain the map and filters */

const newNums= myNumers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums)