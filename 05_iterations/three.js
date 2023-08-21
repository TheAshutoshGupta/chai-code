const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

/* we use for in loop here */

for(const key in myObject)
{
    // for keys
    console.log(key);
}

for(const key in myObject){
    // for keys and value both
    console.log(`key is ${key} and value is ${myObject[key]}`);
}

/* will this for in loop will work on arrays too? */
const programming=["js","rb","py","java","cpp"]

for (const i in programming){
    console.log(i); //this will give keys like 0,1,2,3,
}