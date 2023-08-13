// array

const myArr = [0,1,2,3,4,5,6]
const myHeroes=["shaktimann","naagraaj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[1]);

// array methods

myArr.push(6)
//console.log(myArr)
myArr.pop()


//myArr.unshift(8)//similar to the insert function in set of C++
//console.log(myArr)

myArr.shift() //removes the first indexed value
//console.log(myArr)

//console.log(myArr.includes(9)) //bool
//console.log(myArr.indexOf(9))  //index

const newArr=myArr.join()//converts the array to string with specific separator

//console.log(myArr);
//console.log(newArr)//stringed and binded

//slice, splice
    /console.log("A", myArr)

    const myn1=myArr.slice(1, 3) //this doesn't manipulates the original array
    console.log(myn1);
    console.log("B",myArr)


    const myn2 = myArr.splice(1,3)//this manipulates the original array
    console.log("C",myArr)

    //console.log(myn1)
    console.log(myn2)