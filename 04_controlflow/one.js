//if
    const isUserLoggedIn = true;
    if(isUserLoggedIn){

    }

    const balance = 1000;
    if(balance>100) console.log("test1"),console.log("test2");  //bad practice

    /* syntax */
        if(true){

        }
        else if(true)
        {

        }
        else if(true)
        {

        }
        else{

        }
//switch statement
    const month=3;
    switch (month) {
        case 4:
            console.log("not true");
            break;
        case 5:
            console.log("not true");
            break;
        case 6:
            console.log("not true");
            break;
        case 3:
            console.log("true");
            break;
    
        default:
            console.log("not true");
            break;
    }

//truthy values for arrays and object

const arr=[]
if(arr.length===0) console.log("array is empty")

const obj={}
if(Object.keys(obj).length===0)
{
    console.log("object is empty")
}
//NUllish Coalescing Operator(??) : null undefined

let val1;
val1=null??10 //to manage multiple incoming data from the servers
console.log(val1)